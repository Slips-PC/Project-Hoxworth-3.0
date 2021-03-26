const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botSettings.prefix;
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.snipes = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

	if (err) {

		console.error(err);
	}

	let jsFiles = files.filter(f => f.split(".").pop() === "js");

	if (jsFiles.length <= 0) {

		console.error("No commands found.");
		return;

	}

	console.log("Loading Commands...");

	jsFiles.forEach((f, i) => {

		let props = require(`./commands/${f}`);
		bot.commands.set(props.help.name, props);

	});
});

bot.on("ready", async () => {

	console.log(`Project Hoxworth, live and reporting for duty!`);
	bot.user.setActivity(botSettings.status, { type: botSettings.statusType }) //WATCHING, LISTENING, STREAMING, PLAYING

});

bot.on("message", async message => { 

	if (message.author.bot) {

        return;

    }

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

	let cmd = bot.commands.get(command.slice(prefix.length));

	if (cmd) {

		cmd.run(bot, message, args);

	}
});

bot.on("messageDelete", async message => {
if(message.author.bot) return;
  bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})
bot.login(botSettings.token);
