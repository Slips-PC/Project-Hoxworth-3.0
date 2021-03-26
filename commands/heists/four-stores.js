const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE AND **CHANGE COMMAND NAME**
  "title": "FOUR STORES\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Four_Stores",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/fourstores.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "There have been several hits on these four stores in an otherwise-quiet downtown neighborhood. The MO of the perpetrators has been to execute a rapid hit-and-run, aimed at emptying cash registers and getting out fast.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Hard to see what Bain stands to gain from this, so I suspect it is as much a favor to keep a contact sweet. This area has deep connections with the Russian community, so it is possible that these four stores are caught between two squabbling Russian mob-bosses."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "four-stores",
    desc: "FS",

}
