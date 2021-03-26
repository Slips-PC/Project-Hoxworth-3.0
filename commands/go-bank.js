const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE AND **CHANGE COMMAND NAME**
  "title": "**GO BANK**\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/GO_Bank",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/gobank.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Roberts Bank has branches across Washington, mostly on the outskirts. They’re generally small buildings, serving the local community. The vaults in these branches are the smaller variety, and most often protected with a time-lock.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The gang may think these places are going to be easy to knock over, due to being on the edge of town. I’m impressed with the response times shown by our teams getting out there, but we need to improve. This kind of bank job is the bread and butter of the Payday gang, and we can expect to see more hits."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "go-bank",
    desc: "GB",

}
