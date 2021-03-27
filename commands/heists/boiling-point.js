const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "BOILING POINT\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Boiling_Point",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/mad.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Investigative Committee of the Russian Federation is completely blocking us out from conducting our investigation on exactly what happened by the lumberyard, but we do have an informant telling us about a hidden laboratory and inhumane experiments taking place.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "This is messy. Way too messy. Whatever took place in Russia we know that the PAYDAY gang were involved, but to what extent is still unknown and all our attempts to find the truth is getting shut down immediately. I have contacted McKendrick to see if he can pull any strings to further our investigation, but I'm not holding my breath."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "boiling-point",
    desc: "BP",

}
