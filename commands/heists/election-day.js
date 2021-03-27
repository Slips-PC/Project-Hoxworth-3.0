const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "ELECTION DAY\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Election_Day",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/electionday.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "There were sightings of the Payday crew at the docks where the voting machines for the Mayoral elections were being stored, as well as at the warehouse where they were transported.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Suspicious activity around the ballot machines potentially points to some crooked political crime, though perhaps this was Bains’ intention. In this town, any kind of suspicion could discredit a nominee."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "election-day",
    desc: "ED",

}
