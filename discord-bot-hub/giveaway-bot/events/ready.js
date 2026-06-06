module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Giveaway Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
