module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Marketplace Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
