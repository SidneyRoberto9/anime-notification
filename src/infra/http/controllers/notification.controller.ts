import { Body, Controller, Post } from "@nestjs/common";

import { SendNotification } from "../../../app/use-cases/send-notification/send-notification";
import { CreateNotificationBody } from "../dtos/create-notification-body";

@Controller('api/notification')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { title, platform, platformUrl, description } = body;

    const { notification } = await this.sendNotification.execute({
      title,
      platform,
      description,
      platformUrl,
    });

    return { notification };
  }
}
