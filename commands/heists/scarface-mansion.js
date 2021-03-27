const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "SCARFACE MANSION\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Scarface_Mansion",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/friend.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "A Miami Beach mansion rumored to belong to the Sosa Cartel was hit in the early hours of the morning. One of the bodies identified on the scene bore a strong similarity to photos of Ernesto Sosa, believed to be the Cartel’s top man in Miami. Confiscated security footage identified the attackers as the Payday Gang.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "What was the Payday Gang doing in Miami hitting the Sosas? We’ll have to partner with local law enforcement and investigate what the connection is."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "scarface-mansion",
    desc: "SM",

}
