const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask the AI chat bot a question')
    .addStringOption(option => option.setName('question').setDescription('What do you want to ask?').setRequired(true)),
  async execute({ interaction, message, args }) {
    const response = '🤖 Your question was received. Generating the AI response...';
    if (interaction) {
      await interaction.reply({ content: response, ephemeral: true });
    } else if (message) {
      await message.reply(response);
    }
  }
};
