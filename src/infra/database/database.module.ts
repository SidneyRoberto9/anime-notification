import { Module } from '@nestjs/common';

import { NotificationRepository } from '../../app/repositories/notification.repository';
import { PrismaService } from './Prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],

  exports: [NotificationRepository],
})
export class DatabaseModule {}