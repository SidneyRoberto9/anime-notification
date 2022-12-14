import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChatAlreadyExist } from '../../app/use-cases/chat-already-exist/chat-already-exist';
import { ListChat } from '../../app/use-cases/list-chat/list-chat';

import { NewChat } from '../../app/use-cases/new-chat/new-chat';
import { SendNotification } from '../../app/use-cases/send-notification/send-notification';
import { DatabaseModule } from '../database/database.module';
import { ChatController } from './controllers/chat.controller';
import { NotificationsController } from './controllers/notification.controller';
import { TelegramService } from './telegram/telegram.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [NotificationsController, ChatController],
  providers: [
    SendNotification,
    NewChat,
    ChatAlreadyExist,
    ListChat,
    TelegramService,
  ],
})
export class HttpsModule {}
