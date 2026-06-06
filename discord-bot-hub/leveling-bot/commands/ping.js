const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  async execute({ interaction, message }) {
    const response = 'Pong! Leveling systems are active.';
    if (interaction) {
      await interaction.reply(response);
    } else if (message) {
      await message.channel.send(response);
    }
  }
};
