import { EmbedBuilder } from 'discord.js';

export const exampleEmbed = new EmbedBuilder()
  .setColor(0xef011d)
  .setAuthor({
    name: 'Clique em mim para assistir | Animes House',
    iconURL:
      'https://animeshouse.net/wp-content/uploads/2022/11/logo_ah-natal.png',
    url: 'https://animeshouse.net/episodio/tensei-shitara-ken-deshita-s1-episodio-12-legendado-hd/',
  })
  .setThumbnail('https://i.imgur.com/AfFp7pu.png')
  .addFields(
    { name: 'Tensei Shitara Ken Deshita', value: 'Episódio 12 (Final)' },
    {
      name: 'Sinopse',
      value:
        'A história acompanha Fran, uma jovem meio-fera que vivia como escrava. Após ser salva por uma espada mágica, Fran descobre que o objeto na verdade era um homem na vida passada. Por mais que a espada se lembre da sua antiga existência, ela não consegue lembrar de seu nome e nem de quem era. A partir de então, os dois parte em uma jornada juntos, onde Fran busca se tornar mais forte e a espada descobrir quem era.',
    },
  )
  .setTimestamp()
  .setFooter({
    text: 'Animes House',
  });
