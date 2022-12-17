import { EmbedBuilder } from "discord.js";

export const exampleEmbed = new EmbedBuilder()

  .setColor(0xef011d)
  .setAuthor({
    name: 'Clique em mim para assistir | Animes House',
    url: 'https://animeshouse.net/episodio/yuusha-party-wo-tsuihou-sareta-beast-tamer-saikyoushu-no-nekomimi-shoujo-to-deau-s1-episodio-12-legendado-hd/',
  })
  .setThumbnail(
    'https://animeshouse.net/wp-content/uploads/2022/12/Pic1125-1-426x240.jpg',
  )
  .setTitle(
    'Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau',
  )
  .setDescription('Episódio 12')
  .addFields({
    name: 'Sinopse',
    value:
      'Rein é um domador de feras que lutou ao lado do Herói para derrotar o Rei Demônio, até o dia em que seus colegas decidem expulsá-lo do bando. Ele então decide se aventurar sozinho, quando encontra uma garota chamada Kanade sendo atacada por um monstro. Rein tenta salvá-la, mas a garota derrota o monstro em um só golpe, revelando-se membro da Tribo dos Felinos Espirituais, uma das raças mais fortes do mundo! Rein então decide “domar” a garota, firmando um contrato com ela, e os dois partem em uma jornada. Mas a força estrondosa da garota-gato não passará despercebida por muito tempo…',
    inline: true,
  })
  .setTimestamp()
  .setFooter({
    text: 'Animes House',
  });
