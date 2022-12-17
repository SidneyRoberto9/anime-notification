import { SendNotification } from "@app/use-cases/send-notification/send-notification";
import { exampleEmbed } from "@helpers/Embed.data";
import { Injectable } from "@nestjs/common";
import { Client, GatewayIntentBits, Message } from "discord.js";

const discord_token: string = process.env.DISCORD_TOKEN as string;

@Injectable()
export class DiscordService {
  private readonly client: any;

  constructor(private sendNotification: SendNotification) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });

    this.client.login(discord_token);

    this.client.on('ready', () => {
      console.log(`ONLINE USER TAG: ${this.client.user.tag}`);
    });

    this.client.on('messageCreate', async (msg) =>
      this.messageCaptureForNotification(msg),
    );
  }

  messageCaptureForNotification = async (message: Message) => {
    if (
      (message.author.id === '1052754073461473350' &&
        message.author.username === 'Animes House #📰┃lançamentos') ||
      message.author.id === '1052752471853899786'
    ) {
      const embed = message.embeds[0].data;
      const animeName = embed.title;
      const animeDescription = embed.description;
      const animeUrl = embed.author?.url ?? 'https://animeshouse.net/';

      if (animeUrl && animeName && animeDescription) {
        await this.sendNotification.execute({
          title: animeName,
          description: animeDescription,
          platform: 'Animes House',
          platformUrl: animeUrl,
        });
      }
    }

    if (message.content === '#teste') {
      message.reply({
        embeds: [exampleEmbed],
      });
    }
  };
}
