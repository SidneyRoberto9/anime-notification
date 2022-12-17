import { Notification } from "@app/entities/Notification/notification";
import { NotificationRepository } from "@app/repositories/notification-repository";

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
