import { Chat } from '../entities/Chat/chat';

export abstract class ChatRepository {
  abstract create(chat: Chat): Promise<void>;
}
