import { Injectable } from '@nestjs/common';

import { Chat } from '../../entities/Chat/chat';
import { ChatRepository } from '../../repositories/chat-repository';

interface SendChatRequest {
  telegramId: string;
  firstName: string;
}

interface SendChatResponse {
  chat: Chat;
}

@Injectable()
export class NewChat {
  constructor(private chatRepository: ChatRepository) {}

  async execute(request: SendChatRequest): Promise<SendChatResponse> {
    const { firstName, telegramId } = request;

    const chat = new Chat({
      telegramId,
      firstName,
    });

    await this.chatRepository.create(chat);

    return {
      chat,
    };
  }
}
