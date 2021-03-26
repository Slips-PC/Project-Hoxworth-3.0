const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE AND **CHANGE COMMAND NAME**
  "title": "**DIAMOND STORE**\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Diamond_Store",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/diamondstore.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Despite the great wealth on display, the ‘Gioielli di Famiglia’ protected its expensive store with only a modest amount of security. The building had several ways in and out, cameras controlled by a well-equipped security room and several guards.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Perhaps they thought that bringing their Milan chic to the heart of downtown would keep them safe from the Payday crew. If anything, this proves that Bain and his boys are willing to hit absolutely anywhere. This wealth of easily fenced stones made it a natural target for the Payday gang."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "diamond-store",
    desc: "DS",

}
