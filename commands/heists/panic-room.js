const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "PANIC ROOM\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Panic_Room",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/flat.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "A building in the projects was the scene of a major gunfight. As local police arrived they found the Payday Gang on the scene, and all hell broke loose. As our investigators analyzed the scene in the aftermath, it seemed the whole building had been torn apart using explosives. Someone was clearly looking for something big there.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "These clowns are the worst. No telling what they were after here, but the damage to the building was very severe. Which just proves that they must be stopped, and soon - we can’t allow these marauders to wreak such havoc in our city any longer."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "panic-room",
    desc: "PR",

}
