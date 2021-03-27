const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HOXTON BREAKOUT\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Hoxton_Breakout",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/hox.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Security was very high as the prisoner - James Hoxworth - was being transferred from Hazelton Prison to his parole hearing. The Payday gang intercepted this transfer through the use of C4 explosives. They then escorted him through the streets. Soon after escaping from the reacting forces, they headed to the FBI headquarters at the Hoover building, where they stole a server.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The gang obviously wanted this guy back, and he obviously wanted something from us. If there’s one thing to learn from this, it is never underestimate the Payday gang."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "hoxton-breakout",
    desc: "HXBR",

}
