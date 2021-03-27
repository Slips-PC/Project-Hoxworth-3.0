const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "BIG OIL\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Big_Oil",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/bigoil.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Professor Rossy suffered a serious burglary at his secluded laboratory. He is a highly respected physicist, who has spent years trying to convince the scientific world of the viability of cold fusion - the cheap generation of enormous amounts of power without radiation. The mansion that houses his laboratory is in a remote area, and not easy to reach.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "I smell the spoor of the Hill on this one. From what we can gather, Prof. Rossy was on the verge of something truly remarkable. If he has finally made a breakthrough, it would be worth a lot to the right - or wrong - people. This one might lead me to a tasty catch, possibly proving Crime.Net’s political connections."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "big-oil",
    desc: "BL",

}
