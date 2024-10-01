module.exports = {
  
  TOKEN: process.env.TOKEN || "",
  PREFIX: process.env.PREFIX || "..",

  XversE: {
    version: "2.1.1",
    logChannelID: process.env.logChannelID || "Logging-Channel-ID",
    DiscordServer: "https://discord.gg/Jarvis-HQ",
    Jarvis: "https://discord.com/users/899961311771897877",
    XversE: "https://github.com/Jarvis1337/XversE-Adv-Handler",
    inviteURL: "https://discord.com/api/oauth2/authorize?client_id=XversE&permissions=423963786737&scope=bot%20applications.commands"
  },

  Embed: {
    color: "#000000",
    footer: "Thanks for Choosing XversE-Adv-Handler"
  }, 

  Images: {
    Banner: "https://media.discordapp.net/attachments/936162957648351233/957608674472366110/20220327_172425.png"
  },

  Emoji: {
    Error: "<a:wrong:1196118706217029762>",
    hey: "<a:musictime:1196118762785615992>",
    dot: "<:dot:1220432030626484275>", 
    github: "<:github:1196118782373003385>",
    crown: "<a:gold_crown:1196118800928612402>",
    inv: "<:invitation:1196523564795428986>",
    support: "<:support:1196523581203550309>"
  }

};
