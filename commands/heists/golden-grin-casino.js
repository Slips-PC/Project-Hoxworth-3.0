const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "GOLDEN GRIN CASINO\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Golden_Grin_Casino",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/ggc.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Golden Grin is one of the premier casinos on the Las Vegas strip. From the report submitted by the LVPD, it appears that the Payday gang came very prepared for this one - zeppelins, inside men, limos and a custom-built drill so big it needed heavy power and coolant. But, given all of this, the owners are being very cagey about what they Payday gang took. \“They ripped the heart outta this place,\" an employee was quoted as saying, though, as yet, no insurance claim has been filed.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "It’s way out of where they usually operate, so I’ve instructed my team to offer any assistance required by the Nevada police. All the evidence we can pull on the Payday gang will be valuable. But this job worries me. Not only was it one of the best planned and executed heists they’ve pulled, it means they’re looking beyond the capital."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "golden-grin-casino",
    desc: "GGC",

}
