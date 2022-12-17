import { Injectable } from "@nestjs/common";
import { Client, GatewayIntentBits } from "discord.js";

import { SendNotification } from "../../../app/use-cases/send-notification/send-notification";
import { exampleEmbed } from "../../../helpers/Embed.data";

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

  messageCaptureForNotification = async (message) => {
    if (message.content === '#teste') {
      message.reply({
        embeds: [exampleEmbed],
      });
    } else {
      const firstEmbed = message.embeds[0];
      const animeUrl = firstEmbed.data.author.url;

      const findAnimeItem = firstEmbed.data.fields.filter(
        (item) =>
          item.value.includes('Episódio') || item.name.includes('Episódio​'),
      )[0];

      if (animeUrl && findAnimeItem) {
        await this.sendNotification.execute({
          title: findAnimeItem.name,
          platform: 'Animes House',
          platformUrl: animeUrl,
        });
      }
    }
  };
}
