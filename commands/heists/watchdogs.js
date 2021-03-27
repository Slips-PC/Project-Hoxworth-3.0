const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "WATCHDOGS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Watchdogs",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/watchdogs.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "This operation was conducted in cooperation with Hector Morales. The Payday gang were originally contracted to provide escort for a batch of Morales’ coke. The real purpose, however, was for them to be in a place and time of our choosing. Unfortunately, the Bureau underestimated the gang, who fought their way out of the ambush. However, it does not appear that the gang suspected the involvement of the Bureau. Morales directed them to a rendezvous at the nearby docks, where a second attempt to apprehend them was made.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "If there was ever a perfect opportunity to nail the Payday gang, this was it. Packed into a van, surrounded, we should have ended this there."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "watchdogs",
    desc: "WD",

}
