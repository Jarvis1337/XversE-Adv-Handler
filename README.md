[![Github Profile][Jarvis1337]][Jarvis1337-url]
[![MIT License][license-shield]][license-url]
[![Library][NodeJS]][NodeJS-url]
[![Discord.Js Version][discord-js]][discord-js-url]
[![Version][version]][version-url]
[![Github Releases][github-releases]][github-releases-url]
[![Github Repo Size][GH-Repo]][GH-Repo-url]
[![replit][Replit]][Replit-url]

*<h1 align="">🚀 XversE-Adv-Handler <3...</h1>*
- ***XversE is an advanced Discord.js v13 bot handler designed for developers seeking a feature-rich solution. With built-in support for a premium system, seamless MongoDB connectivity, and a collection of advanced bot developer commands and etc...***

- > ***XversE-Adv-Handler streamlines the development process for Discord bots. Whether you're a seasoned developer or just starting, this handler provides a solid foundation for creating powerful and sophisticated Discord bots. Elevate your bot development experience with XversE-Adv-Handler today...***

- ***This Command Handler is currently in Beta. I have made extensive efforts to identify and address any possible bugs. However, if you encounter any [issues](https://github.com/Jarvis1337/XversE-Adv-Handler/issues) or [errors](https://github.com/Jarvis1337/XversE-Adv-Handler/issues), please don't hesitate to [contact me](https://github.com/Jarvis1337/). Your feedback is valuable, so whether it's an error, an issue, or a suggestion for improvement, I would greatly appreciate hearing from you <3...***

----

*<h2>🏁 Starting</h2>*
- *I will prefer to run it on repl.it as it gives more convinience than glitch website.. Go to repl.it [here](https://replit.com/)...*
- *A Code was written in Javascript that helps you to create a advance discord bot with using this command handler.*
- *The `XversE-Adv-Handler` is still under development, but it already has a lot of interesting features, including :*
  - *Customization: You can customize your bot to meet your specific needs. You can change its appearance, its behavior, and its capabilities.*
  - *Privacy: Your bot's data is stored securely on your own server.*
  - *Ease of use: XversE-Adv-Handler is easy to use, even for beginners.*  

> ***We Are Also Gonna Add Some More New Amazing & Existing Features... 🚀 Please [follow](https://github.com/Jarvis1337) on [GitHub](https://github.com/Jarvis1337) to stay tuned with us for more Exciting future Updates like this <3...***

----

*<h2>🚀 Here are the installation steps : ----</h2>*
***1. Check Node.js Version :***  
- *Ensure you have Node.js version 18 or higher installed. You can verify this by running node -v in your terminal.*
- *If you don't have it or need to update, download the latest LTS (Long-Term Support) version from https://nodejs.org/.*

***2. Clone the repository using the following command :***
> ```xml
> git clone https://github.com/Jarvis1337/XversE-Adv-Handler.git
> ```

***3. Navigate into the cloned directory :***
> ```js
> cd XversE-Adv-Handler
> ```

***4. Install the required dependencies using npm :***
> ```js
> npm install
> ```

***5. Configure the Settings :***  
- *Edit or modify the `config.js` file (or any other configuration file specified in the project documentation) to match your specific requirements, such as bot tokens, database connections, and other settings...*

```js config.js
{
  TOKEN : process.env.TOKEN || "",
  "PREFIX" : process.env.PREFIX || "..",
  "XversE" : {
    "version" : "2.1.2",
    "logChannelID" : process.env.logChannelID || "Logging-Channel-ID" 
  } 
}
```
> ***🚨🚨 Commiting your token to be accessed by others or making it public is strictly prohibited. So, dont share your token in any cost or use `.gitignore` to hide secrets 🚨🚨***

***6. Start the Project using the following command:***
> ```bash
> npm run start or node index.js
> ```

***7. Invite the bot to your server:***
> ***Generate an invite link for your bot and invite it to your server using the Discord Developer Portal or using permissions calculator: https://discordapi.com/permissions.html***

***Following these steps should get your XversE-Adv-Handler bot up and running <3...***


----

*<h2>🚀 XversE Command File Format ( Example / Usage ) <3...</h2>*

> ***This file format will help you create new commands for the XversE-Adv-Handler, You can create any Message and Interaction ( Slash ) command you want using this file format <3...***

- *<h4>🚀 Message Command File Format ( Message Command )</h4>*

```js

const { Message } = require("discord.js");
const Jarvisx1337 = require("../../../index");

module.exports = {
  name: "",
  aliases: [""],
  description: "",
  userPermissions: '',
  botPermissions: '',
  cooldown: 10,

  /**
   * @param {Jarvisx1337} client
   * @param {Message} message
   * @param {String[]} args
   */
  Xexecute: async (client, message, args) => {
    // Put Your Code Here <3...

  },
};

```

- *<h4>🚀 Interaction Command File Format ( Slash Command ) `Chat Input`</h4>*

```js

const { CommandInteraction } = require("discord.js");
const Jarvisx1337 = require("../../../index");

module.exports = {
  name: "",
  description: "",
  userPermissions: '',
  botPermissions: '',
  cooldown: 10,
  type: "CHAT_INPUT",

  /**
   * @param {Jarvisx1337} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  Xexecute: async (client, interaction, args) => {
    // Put Your Code Here <3...

  },
};

```

----

*<h2>🔥 Setup Uptime robot ----</h2>*
*After Completing all the required installments and the changes head over to [Uptime Robot](https://uptimerobot.com/) and login there..Choose the monitor as `https`.Then you would need a link..You could get the link in the web section of you project..First time if you dont run the project you could not see that section.Run the project and you could see it.Then paste the link in [uptime robot](https://uptimerobot.com/) and take any name and click monitor..And your project will be online 24/7..*

----

*<h2>📜 Contributing on /- XversE 🚀 ----</h2>*

***Thank you for your interest in contributing to [XversE-Adv-Handler](https://github.com/Jarvis1337/XversE-Adv-Handler/)! Here are some guidelines to follow when contributing:***

***🚀 GitHub Contribution Guidelines***
- 1. *[Follow me](https://github.com/Jarvis1337) and give the [Star & Fork the repository](https://github.com/Jarvis1337/XversE-Adv-Handler), then create a new branch for your feature or bug fix.*
- 2. *Write clean and concise code that follows the established coding style.*
- 3. *Create detailed and thorough documentation for any new features or changes.*
- 4. *Write and run tests for your code.*
- 5. *Submit a pull request with your changes.*

***Your contribution will be reviewed by the project maintainers, and any necessary feedback or changes will be discussed with you. We appreciate your help in making XversE-Adv-Handler better!***

----
> *<h4 align="center">⭐ Feel free to Star the Repository if this helped you!</h4>*
----
> *<h4 align="center">XversE-Adv-Handler © 2024 by ~Jarvis is licensed under GNU General Public License v3.0 and Attribution 4.0 International</h4>*

[Jarvis1337]: https://img.shields.io/badge/Github-Jarvis1337-blueviolet?style=for-the-badge&logo=github
[Jarvis1337-url]: https://github.com/Jarvis1337
[license-shield]: https://img.shields.io/github/license/Jarvis1337/XversE-Adv-Handler?style=for-the-badge&logo=Github&color=E6E6FA
[license-url]: https://github.com/Jarvis1337/XversE-Adv-Handler/blob/master/LICENSE
[NodeJS]: https://img.shields.io/badge/Library-Node.js_v18-orange?style=for-the-badge&logo=nodedotjs
[NodeJS-url]: https://nodejs.org/en
[discord-js]: https://img.shields.io/github/package-json/dependency-version/Jarvis1337/XversE-Adv-Handler/discord.js?style=for-the-badge&logo=javascript
[discord-js-url]: https://discord.js.org/
[version]: https://img.shields.io/github/package-json/v/Jarvis1337/XversE-Adv-Handler?style=for-the-badge&logo=Github&label=XversE%20Adv%20Handler&color=brightgreen
[version-url]: https://github.com/Jarvis1337/XversE-Adv-Handler/releases
[github-releases]: https://img.shields.io/badge/Github-Releases-ff0000?style=for-the-badge&logo=github
[github-releases-url]: https://github.com/Jarvis1337/XversE-Adv-Handler/releases
[GH-Repo]: https://img.shields.io/github/repo-size/Jarvis1337/XversE-Adv-Handler?style=for-the-badge&color=00ffff&label=Repository%20Size&logo=github
[GH-Repo-url]: https://github.com/Jarvis1337/XversE-Adv-Handler/
[Replit]: https://img.shields.io/badge/Platform-Replit-000000?style=for-the-badge&logo=replit
[Replit-url]: https://replit.com/