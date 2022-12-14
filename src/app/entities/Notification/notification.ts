import { randomUUID } from 'node:crypto';

import { Replace } from '../../../helpers/Replace';

export interface NotificationProps {
  title: string;
  platform: string;
  platformUrl: string;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    const isTitleLengthValid = this.validateTitleLength(props.title);
    const isPlatformUrlValid = this.validatePlatformUrl(props.platformUrl);

    if (!isTitleLengthValid) {
      throw new Error('Title length is not valid');
    }

    if (!isPlatformUrlValid) {
      throw new Error('Platform URL is not valid');
    }

    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  private validateTitleLength(title: string): boolean {
    return title.length >= 3 && title.length <= 240;
  }

  private validatePlatformUrl(platformUrl: string): boolean {
    const rx = new RegExp(/https?:\/\//g);

    return rx.test(platformUrl);
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get title(): string {
    return this.props.title;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get platform(): string {
    return this.props.platform;
  }

  public set platform(platform: string) {
    this.props.platform = platform;
  }

  public get platformUrl(): string {
    return this.props.platformUrl;
  }

  public set platformUrl(platformUrl: string) {
    this.props.platformUrl = platformUrl;
  }
}
