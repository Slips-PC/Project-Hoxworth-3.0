const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE AND **CHANGE COMMAND NAME**
  "title": "**SHADOW RAID**\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Shadow_Raid",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/shadowraid.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "It appears that there was a burglary on a warehouse registered to Murkywater. However, there has been no official word on this, and our only lead on it comes from overheard conversations with Murkywater personnel we occasionally employ. Of note, however, is that the market was flooded with foreign banknotes and ancient artifacts shortly after.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The Murkies aren’t saying anything about what went down that night. Can’t blame ‘em. If they’re moving as much illegal contraband as we suspect, they wouldn’t want us sniffing around."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "shadow-raid",
    desc: "SR",

}
