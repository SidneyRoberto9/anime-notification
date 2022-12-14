import { Injectable } from '@nestjs/common';

import { ChatRepository } from '../../repositories/chat-repository';

interface SendChatRequest {
  telegramId: string;
}

interface SendChatResponse {
  isExist: boolean;
}

@Injectable()
export class ChatAlreadyExist {
  constructor(private chatRepository: ChatRepository) {}

  async execute(request: SendChatRequest): Promise<SendChatResponse> {
    const { telegramId } = request;

    const isExist = await this.chatRepository.findByTelegramId(telegramId);

    return {
      isExist,
    };
  }
}
