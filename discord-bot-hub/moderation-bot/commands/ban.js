const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the server')
    .addUserOption(option => option.setName('target').setDescription('User to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason for ban')),
  async execute({ interaction, message, args }) {
    const target = interaction ? interaction.options.getMember('target') : message.mentions.members.first();
    const reason = interaction ? interaction.options.getString('reason') : args.slice(1).join(' ') || 'No reason provided';
    const member = target;

    if (!member) {
      return interaction ? interaction.reply({ content: 'Please mention a user to ban.', ephemeral: true }) : message.reply('Please mention a user to ban.');
    }

    if (!member.bannable) {
      return interaction ? interaction.reply({ content: 'I cannot ban this user.', ephemeral: true }) : message.reply('I cannot ban this user.');
    }

    await member.ban({ reason });
    const response = `🚨 ${member.user.tag} was banned. Reason: ${reason}`;
    if (interaction) {
      await interaction.reply(response);
    } else {
      await message.channel.send(response);
    }
  }
};
