const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play a track in your voice channel')
    .addStringOption(option => option.setName('query').setDescription('Song name or URL').setRequired(true)),
  async execute({ interaction, message }) {
    const response = '🎶 Added the track to the music queue.';
    if (interaction) {
      await interaction.reply({ content: response, ephemeral: true });
    } else if (message) {
      await message.reply(response);
    }
  }
};
