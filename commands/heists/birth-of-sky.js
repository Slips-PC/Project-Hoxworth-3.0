const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "BIRTH OF SKY\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Birth_of_Sky",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/birthsky.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Murkywater is an army, and an army demands logistics. The supply chain for Murkywater is very impressive. Ships and trucks keep the ammo flowing out (and, if rumors are believed, the contraband flowing back), but the real workhouse of their supply chain is the Z-170 \"Zeus\" cargo plane. Capable of carrying everything from tanks to infantry, when it is packed with ill-gotten loot it is a tempting target.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The clowns are bold, I'll grant them that. The clowns were obviously aboard from the beginning. This points to someone within Murkywater helping them out. Not that those mercenary bastards are ever likely to tell us. They close ranks fast. I'm sure if they ever find who is betraying them, well....we'll probably never hear what happens."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "birth-of-sky",
    desc: "BOS",

}
