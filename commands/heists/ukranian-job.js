const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "UKRANIAN JOB\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Ukranian_Job",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/ukrjob.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "This appears to have been a jewelry store job, similar to many others committed, though the goal was very specific - a diamond tiara secured in a safe. This tiara was being held for Dimitri Volkov, and was apparently intended to be worn by his wife at their wedding.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "If it wasn’t for the people who might get caught in the crossfire, I’d be happy to let these mobsters take shots at each other over their petty squabbles."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "ukranian-job",
    desc: "UJ",

}
