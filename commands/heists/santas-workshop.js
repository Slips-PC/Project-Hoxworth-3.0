const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "SANTA'S WORKSHOP\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Santa's_Workshop",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/santasworkshop.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The industrial areas have long been havens for criminal activity, and the greater the decay in the buildings, it seems, the greater the crimes. We knew that there was a new supply of cocaine in the city, and were following various leads to its origin. From what we can gather from the remaining evidence this warehouse was being used to cut and package the product, before being distributed across the city.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "These old industrial wastelands are breeding grounds for this kinda crap. And these bastards had their cutters dressed up as elves. What kind of sick mind dreams that up? Regardless, this amount of coke means that there is a new supply into the city. The clowns didn't leave much for us to go on, but perhaps we can find something to trace it back."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "santas-workshop",
    desc: "SW",

}
