import { Injectable } from '@nestjs/common';

import { Notification } from '../../../../app/entities/Notification/notification';
import { NotificationRepository } from '../../../../app/repositories/notification-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        title: notification.title,
        platform: notification.platform,
        platformUrl: notification.platformUrl,
        createdAt: notification.createdAt,
      },
    });
  }
}
