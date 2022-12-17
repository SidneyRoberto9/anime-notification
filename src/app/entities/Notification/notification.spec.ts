import { Notification } from "./notification";

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      title:
        'Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru',
      platform: 'animesonline.cc',
      description: 'Episodio 01',
      platformUrl: 'https://animesonline.cc/tv/',
    });

    expect(notification).toBeTruthy();
  });

  it('should not be able to create a notification title with less than 5 characters', () => {
    const notification = () => {
      new Notification({
        title: 'a',
        platform: 'animesonline.cc',
        description: 'Episodio 01',
        platformUrl: 'https://animesonline.cc/tv/',
      });
    };

    expect(notification).toThrow;
  });

  it('should not be able to create a notification title with more than 240 characters', () => {
    const notification = () => {
      new Notification({
        title: 'a'.repeat(241),
        platform: 'animesonline.cc',
        description: 'Episodio 01',
        platformUrl: 'https://animesonline.cc/tv/',
      });
    };

    expect(notification).toThrow;
  });

  it('should not be able to create a notification PlatformUrl without http', () => {
    const notification = () => {
      new Notification({
        title:
          'Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru',
        platform: 'animesonline.cc',
        description: 'Episodio 01',
        platformUrl: 'animesonline.cc/tv/',
      });
    };

    expect(notification).toThrow;
  });
});
