const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "GREEN BRIDGE\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Green_Bridge",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/glace.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Green Bridge blown to bits and several prison transports sawed open. It seems to have been the Payday Gang again. There were a number of prisoners missing, but it's hard to say who they were after - none of the missing had any obvious connection to the gang or any of their known associates.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Blowing up a major bridge just to break someone out. These guys are going far beyond anything ever heard of in US crime history. We must stop them, and soon!"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "green-bridge",
    desc: "GB",

}
