const {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  EmbedBuilder,

  ButtonBuilder,
  ActionRowBuilder,
} = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "berita",
  description: "Dapatkan berita terbaru dari pusatnya",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  options: [
    {
      name: "kategori",
      description: "pilih kategori",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { name: "Nasional", value: "nasional" },
        { name: "Internasional", value: "internasional" },
      ],
    },
  ],
  run: async (client, interaction, ...args) => {
    const user = interaction.user;
    const input = interaction.options.get("kategori").value;
    const res = await axios.get(
      `https://api-berita-indonesia.vercel.app/cnn/${input}/`
    );
    const data = res.data.data.posts;
    let i = Math.floor(Math.random() * 30);
    console.log(i);
    const image = data[i].thumbnail;
    const cnn = data[i];

    const embed = new EmbedBuilder()
      .setTitle(cnn.title)
      .setDescription(cnn.description)
      .setURL(cnn.link)
      .setColor("DarkRed");

    return interaction.reply({
      content: `berita dari pusat permintaan sepuh ${user}`,
      embeds: [embed],
      files: [image],
    });
  },
};
