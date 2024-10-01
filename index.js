require("dotenv").config();
const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");
const config = require("./settings/config.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ["GUILD", "GUILD_MEMBER", "CHANNEL", "MESSAGE", "USER"],
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ['everyone', 'users', 'roles'],
    repliedUser: false,
  },
});

module.exports = client;

// <!-- Global Variables -->
client.events = new Collection()
client.commands = new Collection()
client.cooldowns = new Collection();
client.slashCommands = new Collection()
client.aliases = new Collection()
client.MsgCategories = fs.readdirSync('./Commands/Message')
client.SlashCategories = fs.readdirSync('./Commands/Slash')
client.temp = new Collection()
client.config = require('./settings/config')

require('./handlers/handler')(client)
client.login(config.TOKEN);

// <!--- Error Handling --->
process.on("warning", (warn) => {
  console.log(" [Error_Handling] :: Warning");
  console.log(warn);
});

process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});

process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [Error_Handling] :: Multiple Resolves");
  console.log(type, promise, reason);
});