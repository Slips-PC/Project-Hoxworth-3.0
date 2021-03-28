const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "ALASKAN DEAL\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Alaskan_Deal",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/wwh.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Something odd went down on a snowy evening at a deserted dockyard near Anchorage, Alaska. Observations by local authorities flagged an appearance in the area by known mercenary Vernon Locke, though the exact nature of his potential involvement remain unclear. Law enforcement survivors on the ground report possible Payday operatives leaving the area on a cargo ship that proved to be untraceable. The incident file remains open, pending further information.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Something is coming to a head, but I don’t yet know what. I can’t see how all the threads connect yet, but I know they are all laid out. After the Alaska event, rumors abound in the underworld of betrayal, but I haven’t been able to confirm anything. It’s damned frustrating."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "alaskan-deal",
    desc: "AD",

}
