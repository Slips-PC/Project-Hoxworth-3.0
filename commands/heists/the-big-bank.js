const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "THE BIG BANK\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/The_Big_Bank",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/bigbank.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "We have a room full of files detailing attempted robberies on this place, going back decades. However, not one has been successfully completed. The Benevolent take their security extremely seriously, and their preparations are some of the best we at the Bureau have seen.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Without giving them too much praise, Bains’ crew executed a text-book heist here. From the planning to the execution, it was a thorough job. This one should be getting taught at the Academy. The Benevolent is uncomfortably close to the White House, so I recommend tightening patrols around here."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "the-big-bank",
    desc: "TBB",

}
