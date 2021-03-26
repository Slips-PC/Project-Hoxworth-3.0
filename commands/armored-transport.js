const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE AND **CHANGE COMMAND NAME**
  "title": "**ARMORED TRANSPORT**\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Transport",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/armtrans.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Crime.Net has coordinated multiple hits against GenSec's armored trucks all across the city. The jobs are well-planned. Hits have included the use of cranes, truck cabs and planting explosives to blow up downtown skywalks.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Based on the fact that Bain is planning against moving convoys, there is almost certainly a leak in the GenSec operation. This indicates that Bain may have operatives within that organization. I recommend assisting GenSec in any way we can to help plug that leak."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "armored-transport",
    desc: "AT",

}
