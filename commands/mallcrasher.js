const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE AND **CHANGE COMMAND NAME**
  "title": "HEIST NAME\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Mallcrasher",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/mallcrasher.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Based on the security footage, this appears to be an act of focused vandalism. The stores in the mall were specifically focused for damage, rather than theft.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Not the typical job for Bains’ crew. Got to be another motive behind this. Look into who stands to lose, and who stands to gain, from the damage here."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "mallcrasher",
    desc: "MC",

}
