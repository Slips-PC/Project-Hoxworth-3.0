const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "SHACKLETHORNE AUCTION\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Shacklethorne_Auction",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/sah.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Boston PD has sent us a report about an incident apparently involving the Payday crew during an unlisted auction of recently discovered antiques from the Shacklethorne Expedition shipwreck. It is not clear how this event is connected to the other incidents surrounding the Clowns at this time.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Even if they were of substantial value, the monetary gain in comparison to the difficulty of fencing the objects would not make sense. If they needed money, they would be looking for a juicier target."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "shacklethorne-auction",
    desc: "SA",

}
