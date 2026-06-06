const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Show information about the server'),
  async execute({ interaction, message }) {
    const embed = new EmbedBuilder()
      .setTitle('Server Information')
      .setDescription('This is a placeholder server information response.')
      .setColor('#00AAFF');

    if (interaction) {
      await interaction.reply({ embeds: [embed] });
    } else if (message) {
      await message.reply({ embeds: [embed] });
    }
  }
};
