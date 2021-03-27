const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "NIGHTCLUB\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/nightclub",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/nightclub.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Tasteful Club is a routine stop for our patrols on Saturday nights. The calls are mostly related to drunk-and-disorderlies. Owned and managed by Dimitri Volkov - a known snitch who handed Vlad Kozak to the authorities - we also suspect that it hosts illegal gambling. It appears that the Payday gang stole a large sum of money from the safe in the managers office.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Normally, I wouldn’t give two hoots for gangsters shooting each other up, but the Tasteful is a public place, which means civilians might get caught. And why are they targeting this particular Russian - maybe a connection with a rival?"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "nightclub",
    desc: "NC",

}
