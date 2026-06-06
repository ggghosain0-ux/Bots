module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Verification Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
