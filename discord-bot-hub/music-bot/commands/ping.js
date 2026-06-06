const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  async execute({ interaction, message }) {
    const response = 'Pong! Music playback is online.';
    if (interaction) {
      await interaction.reply(response);
    } else if (message) {
      await message.channel.send(response);
    }
  }
};
