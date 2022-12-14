import { Module } from '@nestjs/common';

import { ChatRepository } from '../../app/repositories/chat-repository';
import { NotificationRepository } from '../../app/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaChatRepository } from './prisma/repositories/prisma-chat-repository';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
    {
      provide: ChatRepository,
      useClass: PrismaChatRepository,
    },
  ],

  exports: [NotificationRepository, ChatRepository],
})
export class DatabaseModule {}
