const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('Show your current level and XP'),
  async execute({ interaction, message }) {
    const response = '📊 Your current rank and XP were fetched successfully.';
    if (interaction) {
      await interaction.reply({ content: response, ephemeral: true });
    } else if (message) {
      await message.reply(response);
    }
  }
};
