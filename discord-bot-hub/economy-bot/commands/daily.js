const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Claim your daily economy reward'),
  async execute({ interaction, message }) {
    const response = '🎉 You claimed your daily reward!';
    if (interaction) {
      await interaction.reply({ content: response, ephemeral: true });
    } else if (message) {
      await message.reply(response);
    }
  }
};
