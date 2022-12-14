import { Injectable } from '@nestjs/common';

import { Chat } from '../../entities/Chat/chat';
import { ChatRepository } from '../../repositories/chat-repository';

interface SendChatResponse {
  listChat: Chat[];
}

@Injectable()
export class ListChat {
  constructor(private chatRepository: ChatRepository) {}

  async execute(): Promise<SendChatResponse> {
    const chat = await this.chatRepository.findAll();

    return {
      listChat: chat,
    };
  }
}
