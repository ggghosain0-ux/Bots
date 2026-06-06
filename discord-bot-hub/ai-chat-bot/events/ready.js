module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[AI Chat Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
