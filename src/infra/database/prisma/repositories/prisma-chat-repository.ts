import { Injectable } from '@nestjs/common';

import { Chat } from '../../../../app/entities/Chat/chat';
import { ChatRepository } from '../../../../app/repositories/chat-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaChatRepository implements ChatRepository {
  constructor(private prisma: PrismaService) {}

  async create(chat: Chat): Promise<void> {
    await this.prisma.chat.create({
      data: {
        id: chat.id,
        telegramId: chat.telegramId,
        firstName: chat.firstName,
      },
    });
  }

  async findByTelegramId(telegramId: string): Promise<boolean> {
    const chat = await this.prisma.chat.findFirst({
      where: {
        telegramId: telegramId,
      },
    });

    return chat == null ? false : true;
  }

  async findAll(): Promise<any[]> {
    return await this.prisma.chat.findMany();
  }
}
