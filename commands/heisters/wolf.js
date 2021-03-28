const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "WOLF\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Wolf",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/clowncase/german.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "For his affinity for explosives and capability with hardware, we consider this one to be the Technician in the group. Further, study by our profiling teams in Behavioral Analysis suggest that \"Wolf\" could be psychotic, as evidenced by his sudden shifts of mood.\n\nFrom the few corroborated accounts we have, \"Wolf\" does not appear to be a US national. His voice carries a distinct Scandinavian accent, suggesting he is Norwegian or Swedish."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "heister-template",
    desc: "HRT",

}