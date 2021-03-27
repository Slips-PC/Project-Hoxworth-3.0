const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "THE BOMB: FOREST\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/The_Bomb:_Forest",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/bombforest.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Trains ferry a huge amount of cargo from the docks to destinations inland. The train tracks are often vulnerable to sabotage, especially around the single-track bridges.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The wreckage at the site was enormous. I’m impressed with how fast our units got out there to engage them. Almost as fast as the ambulances that came back. The Payday gang are increasingly operating outside the city limits - this could be a worrying trend."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "the-bomb-forest",
    desc: "TBF",

}
