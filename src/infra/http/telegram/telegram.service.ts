import { HttpService } from '@nestjs/axios';
import { HttpServer, Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { Message } from 'node-telegram-bot-api';
import { Observable } from 'rxjs';
import { ChatAlreadyExist } from '../../../app/use-cases/chat-already-exist/chat-already-exist';
import { ListChat } from '../../../app/use-cases/list-chat/list-chat';

import { NewChat } from '../../../app/use-cases/new-chat/new-chat';
import { welcome, welcomeAlreadyExist } from '../../../helpers/Message.data';

const TOKEN: string = process.env.TELEGRAM_TOKEN as string;

@Injectable()
export class TelegramService {
  private readonly bot: TelegramBot;
  private platformList: string[] = [
    'Better Animes',
    'Animes Online CC',
    'Animes House',
  ];

  constructor(
    private newChat: NewChat,
    private ChatAlreadyExist: ChatAlreadyExist,
    private listChat: ListChat,
    private httpService: HttpService,
  ) {
    this.bot = new TelegramBot(TOKEN, { polling: true });

    this.bot.onText(/\/start/, (msg: Message) => this.onStartCreateChat(msg));
    this.bot.onText(/\/test (.+)/, (_: Message, match: any) =>
      this.sendNotification(match[1] as string, 'Better Animes'),
    );
  }

  sendNotification = async (msg: string, platform: string) => {
    if (!this.platformList.includes(platform)) {
      throw new Error('Platform not Found!!');
    }

    const { listChat } = await this.listChat.execute();

    this.findAll(msg).subscribe((response) => {
      const animeData = response.data.data[0];
      const imagemUrl = animeData?.images.jpg.image_url;

      listChat.forEach((chat) => {
        this.bot.sendPhoto(chat.telegramId, imagemUrl);
        this.bot.sendMessage(chat.telegramId, msg);
      });
    });
  };

  onStartCreateChat = async (msg: Message) => {
    const { id, first_name } = msg.chat;

    const { isExist } = await this.ChatAlreadyExist.execute({
      telegramId: id.toString(),
    });

    if (!isExist) {
      await this.newChat.execute({
        telegramId: id.toString(),
        firstName: first_name ?? 'Nome não informado',
      });

      this.bot.sendMessage(msg.chat.id, welcome);
    } else {
      this.bot.sendMessage(msg.chat.id, welcomeAlreadyExist);
    }
  };

  findAll(name: string) {
    return this.httpService.get('https://api.jikan.moe/v4/anime?q=' + name);
  }
}
