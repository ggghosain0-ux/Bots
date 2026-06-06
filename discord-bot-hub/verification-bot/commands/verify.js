const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('Complete the server verification process'),
  async execute({ interaction, message }) {
    const response = '✅ You are now verified and have been granted access.';
    if (interaction) {
      await interaction.reply({ content: response, ephemeral: true });
    } else if (message) {
      await message.reply(response);
    }
  }
};
