import { Injectable } from '@nestjs/common';

import { Notification } from '../entities/Notification/notification';
import { NotificationRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
  title: string;
  platform: string;
  platformUrl: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { title, platform, platformUrl } = request;

    const notification = new Notification({
      title,
      platform,
      platformUrl,
    });

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
