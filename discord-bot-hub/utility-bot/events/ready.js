module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Utility Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
