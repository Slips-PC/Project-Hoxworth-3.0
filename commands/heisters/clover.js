const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "CLOVER\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Clover",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/clowncase/female_1.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "According to field reports, the other members of the gang call this one \"Clover\". Another foreign national, we believe Irish, so possibly a connection to \"Hoxton\". She was the first to join the crew when it began to expand, and our initial sighting of her was during the Diamond heist at the McKendrick Museum.\n\n\"Clover\" favours the L-95 assault rifle, which is only issued to the British military. We are currently liaising with the Garda Síochána, checking into Irish paramilitary groups, and any instances of stolen weapons."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "clover",
    desc: "irish",

}