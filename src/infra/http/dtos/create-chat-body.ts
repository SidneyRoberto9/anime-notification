import { IsNotEmpty } from 'class-validator';

export class CreateChatBody {
  @IsNotEmpty()
  telegramId: string;
  @IsNotEmpty()
  firstName: string;
}
