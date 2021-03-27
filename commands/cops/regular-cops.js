const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "REGULAR COPS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Enemies_(Payday_2)#Metropolitan_Police",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/agencyassets/regularcop.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Generally, they might be lightly armed and lack armor, but our regulars shouldn’t be underestimated. They are almost always first on the scene, and fight hard to protect their city. Their kit is variable. Most carry the standard issue Chimano, but some will also pack the Reinfeld, the Compact-5 or even a Bronco.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "MPD rank-and-file. And a light breakfast for the bad guys. These units are poorly armed and armored. They might be the first responders, but being the first response doesn't mean being the best response. I can't fault their spirit. But they need to learn when to hold back, and let the heavier teams get on the scene, 'cos these guys are getting turned into ground chuck."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "regular-cops",
    desc: "RC",

}
