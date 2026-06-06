const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ticket')
    .setDescription('Create a support ticket'),
  async execute({ interaction, message }) {
    const response = '🎫 A ticket panel was created. Staff will respond soon.';
    if (interaction) {
      await interaction.reply({ content: response, ephemeral: true });
    } else if (message) {
      await message.reply(response);
    }
  }
};
