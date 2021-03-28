const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "DIAMOND HEIST\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Diamond_Heist",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/dah.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Garnet Building is one of the most prominent business centers in the DC area and the crown jewel in CEO Mr. Nathan Garnet’s business empire. Long rumored among high society (and criminals) in Washington to house Garnet’s personal fortune reserve of diamonds, the building has been a viable target for gangs like Payday to hit, and as recent events have shown, those suspicions were founded on very solid ground. Since it was hit, Garnet stock has plummeted, and speculations have arisen as to whether the Garnet Group can survive without reconstruction. At the time of writing this entry, the secretive Mr. Garnet has not made any personal (or public) announcements regarding the incident.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "This goes to prove that the Payday gang is still, for all intents and purposes, a bunch of simple thieves, motivated by a bottomless greed. For all their notoriety, craftiness and skill, they’re just two-bit criminals at heart and that will be their downfall. The fact that they took the bait on this is perfectly in line with how we will eventually to stop them. The timing of this hit is a bit odd, though. There’s something “off" about the Garnet Group in all of this, but I just can’t put my finger on it yet."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "diamond-heist",
    desc: "DH",

}
