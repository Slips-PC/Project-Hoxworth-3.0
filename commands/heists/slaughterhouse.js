const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "SLAUGHTERHOUSE\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Slaughterhouse",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/slaughterhouse.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "A traffic incident on the southbound I-45 resulted in a convoy belonging to the independent military contractors, Murkywater, being diverted from its path. Shortly after, it appears to have been attacked, and the main truck was forced off the road and into the meat-packing district. From there, the Payday gang managed to extract several articles from the truck - though Murkywater will not reveal what was stolen.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Things are getting very heated between these two groups. Murkywater has operations all over the world, but they can’t fail to respond to these actions by Bain and his guys. Doubtless the Murkies will retaliate in some fashion. Perhaps we could coordinate with them?"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "slaughterhouse",
    desc: "SH",

}
