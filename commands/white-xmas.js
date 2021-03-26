const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "WHITE XMAS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/White_Xmas",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/whitexmas.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Late on 12/24/2014 a small civilian aircraft suddenly radioed a mayday. As there was no flight path submitted, and it must have been flying very low to have not registered on ATC radar, SWAT teams were dispatched to investigate. What they found was the Payday team attempting to extricate a disoriented pilot from the scene. Later it was revealed that the plane was rented by a fake company, and that the black box recorded a collision with an unknown flying object\n\n"
    },
    {
      "name": "NOTES:",
      "value": "If the Payday gang were there, there must have been something in with that cargo. Based on the low-level flight, my guess is that it was a smuggling run - cocaine, perhaps guns. Security at these small local airfields needs tightening."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "white-xmas",
    desc: "WX",

}
