import { Notification } from '../entities/Notification/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
