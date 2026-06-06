module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`[Ticket Bot] Ready! Logged in as ${client.user.tag}`);
  }
};
