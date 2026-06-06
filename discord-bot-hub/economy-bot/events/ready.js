module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Economy Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
