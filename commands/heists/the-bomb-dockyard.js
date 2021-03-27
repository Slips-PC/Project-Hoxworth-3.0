const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "THE BOMB: DOCKYARD\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/The_Bomb:_Dockyard",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/bombdockyard.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "A Croatian ship, the Moretta, commonly hauls a cargo back and forth from Split, Croatia. Background checks into the registry checked out, and it was authorized to transport military materiel. When this incident occurred, it was carrying a shipment of thermobaric explosives.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The Docks have always been a hotspot for crime. The amounts of drugs, guns and money that have illegally passed through those waters is incalculable. Given the origin of this cargo and the foreign crew, there is a chance that this heist originated overseas, most likely from Croatia. This could indicate that a foreign contact - possibly Horvat - is now working with Crime.Net."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "the-bomb-dockyard",
    desc: "TBD",

}
