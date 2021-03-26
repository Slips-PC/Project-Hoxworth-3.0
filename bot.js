const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botSettings.prefix;
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.snipes = new Discord.Collection();

fs.readdir("./commands/heists", (err, files) => {

	if (err) {

		console.error(err);
	}

	let jsFiles = files.filter(f => f.split(".").pop() === "js");

	if (jsFiles.length <= 0) {

		console.error("No heists found.");
		return;

	}

	console.log("Loading Heists...");

	jsFiles.forEach((f, i) => {

		let props = require(`./commands/heists/${f}`);
		bot.commands.set(props.help.name, props);

	});
});

fs.readdir("./commands/heisters", (err, files) => {

	if (err) {

		console.error(err);
	}

	let jsFiles = files.filter(f => f.split(".").pop() === "js");

	if (jsFiles.length <= 0) {

		console.error("No heisters found.");
		return;

	}

	console.log("Loading Heisters...");

	jsFiles.forEach((f, i) => {

		let props = require(`./commands/heisters/${f}`);
		bot.commands.set(props.help.name, props);

	});
});

fs.readdir("./commands/cops", (err, files) => {

	if (err) {

		console.error(err);
	}

	let jsFiles = files.filter(f => f.split(".").pop() === "js");

	if (jsFiles.length <= 0) {

		console.error("No cops found.");
		return;

	}

	console.log("Loading Cops...");

	jsFiles.forEach((f, i) => {

		let props = require(`./commands/cops/${f}`);
		bot.commands.set(props.help.name, props);

	});
});

fs.readdir("./commands/guns", (err, files) => {

	if (err) {

		console.error(err);
	}

	let jsFiles = files.filter(f => f.split(".").pop() === "js");

	if (jsFiles.length <= 0) {

		console.error("No guns found.");
		return;

	}

	console.log("Loading Guns...");

	jsFiles.forEach((f, i) => {

		let props = require(`./commands/guns/${f}`);
		bot.commands.set(props.help.name, props);

	});
});

fs.readdir("./commands/perkdecks", (err, files) => {

	if (err) {

		console.error(err);
	}

	let jsFiles = files.filter(f => f.split(".").pop() === "js");

	if (jsFiles.length <= 0) {

		console.error("No perk decks found.");
		return;

	}

	console.log("Loading Perk Decks...");

	jsFiles.forEach((f, i) => {

		let props = require(`./commands/perkdecks/${f}`);
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
