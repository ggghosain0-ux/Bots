module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Moderation Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
