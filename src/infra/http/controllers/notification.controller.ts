import { Body, Controller, Post } from '@nestjs/common';

import { SendNotification } from '../../../app/use-cases/send-notification/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { CreateNotificationOnlyTitleBody } from '../dtos/create-notification-only-title-body';

@Controller('api/notification')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { title, platform, platformUrl } = body;

    const { notification } = await this.sendNotification.execute({
      title,
      platform,
      platformUrl,
    });

    return { notification };
  }

  @Post('/ah')
  async createAnimeHouse(@Body() body: CreateNotificationOnlyTitleBody) {
    const { title } = body;

    const { notification } = await this.sendNotification.execute({
      title,
      platform: 'Animes House',
      platformUrl: `https://animeshouse.net/`,
    });

    return { notification };
  }

  @Post('/cc')
  async createAnimesOnlineCC(@Body() body: CreateNotificationOnlyTitleBody) {
    const { title } = body;

    const { notification } = await this.sendNotification.execute({
      title,
      platform: 'Animes Online CC',
      platformUrl: 'https://animesonline.cc/tv/',
    });

    return { notification };
  }

  @Post('/better')
  async createBetterAnimes(@Body() body: CreateNotificationOnlyTitleBody) {
    const { title } = body;

    const { notification } = await this.sendNotification.execute({
      title,
      platform: 'Better Animes',
      platformUrl: 'https://betteranime.net/',
    });

    return { notification };
  }
}
