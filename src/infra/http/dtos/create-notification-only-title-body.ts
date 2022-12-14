import { IsNotEmpty, Length } from 'class-validator';

export class CreateNotificationOnlyTitleBody {
  @IsNotEmpty()
  @Length(3, 240)
  title: string;
}
