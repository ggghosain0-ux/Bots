const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  async execute({ interaction, message }) {
    const response = 'Pong! Economy systems are online.';
    if (interaction) {
      await interaction.reply(response);
    } else if (message) {
      await message.channel.send(response);
    }
  }
};
