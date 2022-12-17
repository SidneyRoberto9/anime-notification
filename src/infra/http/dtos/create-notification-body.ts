import { IsNotEmpty, Length } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty()
  @Length(3, 240)
  title: string;

  @IsNotEmpty()
  platform: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  platformUrl: string;
}
