const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "THE DIAMOND\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/The_Diamond",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/museum.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The McKendrick Museum of Ancient Arts sits beside the Mall, and its exhibitions draw huge numbers of tourists to the city. The display of The Diamond was its biggest draw. The Museum is a solid building, with only a limited number of options for breaking in. In addition to the theft of the Diamond, several artifacts from other exhibitions were taken.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Never saw the appeal in a shiny rock, but I understand the appeal of its value to Crime.Net. We need to brief institutions on proper security. A handful of underpaid mall cops aren’t going to cut it. Further, need to look into who could fence a stone with this kind of value. Would require someone with very special connections."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "the-diamond",
    desc: "TD",

}
