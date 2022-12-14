import { Body, Controller, Post } from '@nestjs/common';

import { SendNotification } from '../../../app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('api/notifications')
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
}