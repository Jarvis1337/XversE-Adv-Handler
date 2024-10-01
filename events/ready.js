const client = require("../index");

client.on("ready", async () => {
  console.log(`[>] 🚀 | ${client.user.username} is Ready to use!`);
  client.user.setStatus("dnd");
  
  function randomStatus() {
    let status = [`XversE-Adv-Handler`, `Github: Jarvis1337/XversE-Adv-Handler`, `@Jarvis1337`];
    let rstatus = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[rstatus], { type: "WATCHING" });
  }; setInterval(randomStatus, 3000) // <!-- 1000 = 1 Sec -->

});