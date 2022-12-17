import { NewChat } from "@app/use-cases/new-chat/new-chat";
import { Body, Controller, Post } from "@nestjs/common";

import { CreateChatBody } from "../dtos/create-chat-body";

@Controller('api/chat')
export class ChatController {
  constructor(private newChat: NewChat) {}

  @Post()
  async create(@Body() body: CreateChatBody) {
    const { firstName, telegramId } = body;

    const { chat } = await this.newChat.execute({
      telegramId,
      firstName,
    });

    return { chat };
  }
}
