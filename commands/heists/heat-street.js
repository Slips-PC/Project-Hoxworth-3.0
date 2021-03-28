const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HEAT STREET\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Heat_Street",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/run.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Payday Gang was sighted in a violent running gun battle through the streets of New York. It seems they were chasing someone up several streets and then escaped via helicopter.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The Payday Gang in New York again? It seems they were looking for someone special here. And were ready to fight an open street battle in Manhattan to get at that someone. Could this have a connection to the firefight in Brooklyn earlier this year?"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "heat-street",
    desc: "HTST",

}
