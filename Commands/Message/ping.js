module.exports = {
  name: "ping",
  description: "Ping!",

  Xexecute: async (client, message) => {
    message.reply(`Pong! ${client.ws.ping}`);
  },
};
