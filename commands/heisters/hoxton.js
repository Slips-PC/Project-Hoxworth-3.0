const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HOXTON\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Hoxton",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/clowncase/old_hoxton.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The second foreign national in the original crew. \"Hoxton\" is the only member of the Payday gang for whom we have a confirmed name - James Hoxworth. Born in the city of Sheffield, England, \"Hoxton\" is well known to both the FBI and Scotland Yard. Extremely cunning, \"Hoxton\" is one of the most experienced members of the crew, and his rap sheet reads like an encyclopedia of modern crime.\n\n\"Hoxton\" was recently incarcerated at Hazelton Prison, but was freed by the Payday gang while he was being taken to a parole hearing. We are sure he will be very difficult to apprehend again."
    },
    {
      "name": "NOTES FROM HOXTON:",
      "value": "Hey, that's me. Could've picked a more flattering picture for my file, though."
    },
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "hoxton",
    desc: "based",

}