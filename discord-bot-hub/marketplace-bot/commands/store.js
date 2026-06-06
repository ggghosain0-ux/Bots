const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('store')
    .setDescription('Show the digital product store'),
  async execute({ interaction, message }) {
    const response = '🛒 The marketplace store has been loaded. Browse available products.';
    if (interaction) {
      await interaction.reply({ content: response, ephemeral: true });
    } else if (message) {
      await message.reply(response);
    }
  }
};
