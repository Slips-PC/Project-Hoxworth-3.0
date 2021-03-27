const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HOTLINE MIAMI\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Hotline_Miami",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/hotlinemiami.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "An assassination attempt on Grigori Beria. A Russian mob boss known by the alias \“The Commissar\". His record shows that he has been involved in a range of criminal activity, including prostitution, drug manufacture and distribution, murder, and guns. The assassination involved two locations. Firstly, a motel on the outskirts of town, which was well-known to us as a hang-out for The Commissar\’s men, and, secondly, a high-rise apartment block.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "We can’t be seen to take sides. We gotta be merciless. Much as I’d like to let these two go at it, wipe each out, we have to go in. Maybe tactics aimed at mitigating casualties, because Bain’s crew left these places looking like warzones."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "hotline-miami",
    desc: "HLM",

}
