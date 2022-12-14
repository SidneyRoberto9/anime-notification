import { Chat } from './chat';

describe('Chat', () => {
  it('should be able to create a chat', () => {
    const chat = new Chat({
      telegramId: '123456789',
      firstName: 'John',
    });

    expect(chat).toBeTruthy();
  });
});
