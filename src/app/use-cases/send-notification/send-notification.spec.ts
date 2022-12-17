// describe('Send Notification', () => {
//   it('should be able to send a notification', async () => {
//     const notificationRepository = new InMemoryNotificationRepository();
//     const sendNotification = new SendNotification(notificationRepository);

//     const { notification } = await sendNotification.execute({
//       title: 'Re:zero kara Hajimeru Isekai Seikatsu',
//       platform: 'animesonline.cc',
//       description: 'Episodio 01',
//       platformUrl: 'https://animesonline.cc/tv/',
//     });

//     expect(notificationRepository.notifications).toHaveLength(1);
//     expect(notificationRepository.notifications[0]).toEqual(notification);
//   });
// });
