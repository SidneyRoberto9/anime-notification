import { Chat } from '../entities/Chat/chat';

export abstract class ChatRepository {
  abstract create(chat: Chat): Promise<void>;
  abstract findByTelegramId(telegramId: string): Promise<boolean>;
  abstract findAll(): Promise<Chat[]>;
}
