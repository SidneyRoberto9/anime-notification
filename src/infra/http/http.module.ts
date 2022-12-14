import { Module } from '@nestjs/common';

import { NewChat } from '../../app/use-cases/new-chat/new-chat';
import { SendNotification } from '../../app/use-cases/send-notification/send-notification';
import { DatabaseModule } from '../database/database.module';
import { ChatController } from './controllers/chat.controller';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController, ChatController],
  providers: [SendNotification, NewChat],
})
export class HttpModule {}
