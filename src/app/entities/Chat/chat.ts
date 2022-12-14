import { randomUUID } from 'node:crypto';

export interface ChatProps {
  telegramId: string;
  firstName: string;
}

export class Chat {
  private _id: string;
  private props: ChatProps;

  constructor(props: ChatProps) {
    this._id = randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id(): string {
    return this._id;
  }

  public get telegramId(): string {
    return this.props.telegramId;
  }

  public set telegramId(telegramId: string) {
    this.props.telegramId = telegramId;
  }

  public get firstName(): string {
    return this.props.firstName;
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName;
  }
}
