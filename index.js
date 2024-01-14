const { Client, Intents } = require('discord.js');
const config  = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`[>] ✅ | Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(config.token || process.env.TOKEN);