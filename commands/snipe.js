const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
    const msg = bot.snipes.get(message.channel.id)
const embed = {
  "description": msg.content,
  "color": 4886754,
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
    "image": {
      "url": msg.image
    },
  "author": {
    "name": msg.author,
    "icon_url": msg.member.user.displayAvatarURL()
  }
};

message.channel.send("Aye, you called? Here's what that last fucker wanted to keep a secret:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "snipe",
    desc: "Template",

}
