import { TelegramService } from "@infra/http/telegram/telegram.service";
import { Injectable } from "@nestjs/common";

import { Notification } from "../../entities/Notification/notification";
import { NotificationRepository } from "../../repositories/notification-repository";

interface SendNotificationRequest {
  title: string;
  platform: string;
  description: string;
  platformUrl: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(
    private notificationRepository: NotificationRepository,
    private telegramService: TelegramService,
  ) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { title, platform, platformUrl, description } = request;

    const notification = new Notification({
      title,
      platform,
      description,
      platformUrl,
    });

    await this.notificationRepository.create(notification);

    await this.telegramService.sendNotification(
      title,
      platform,
      description,
      platformUrl,
    );

    return {
      notification,
    };
  }
}
