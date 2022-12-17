export const welcome: string =
  'Olá, eu sou o bot que vai te notificar sobre os lançamentos dos animes em seus sites favoritos. Seja Bem-Vindo!';

export const welcomeAlreadyExist: string =
  'Calma.. Calma.. Estamos Fabricando as notificações.';

export const newNotification = (name: string, link: string, ep: string) =>
  `${name}\n\n${ep}\n\n${link}`;
