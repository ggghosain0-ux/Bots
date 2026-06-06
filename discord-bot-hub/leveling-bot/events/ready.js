module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Leveling Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
