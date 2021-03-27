const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "FIRESTARTER\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Firestarter",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/firestarter.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "This appears to be aimed squarely at the interests of the Mendoza cartel. A private airfield that was owned by a holding company, a raid on our own regional offices and the destruction of a large cache of currency at a Harvest and Trustee Bank.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Bain and Crime.Net are all over this but I suspect it is a contract job. The Sinaloan cartel have been warring with the Mendozas for years. Are the Sinaloans linked with Bain?"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "Firestarter",
    desc: "FS",

}
