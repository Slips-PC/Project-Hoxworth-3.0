const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HENRY'S ROCK\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Henry's_Rock",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/des.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "We have been asked to investigate an incident involving government contractor Murkywater. Their facility at Henry’s Rock, where several top secret projects are being undertaken on behalf of the United States military, is suspected of being unexpectedly hit by the Payday gang. It is believed at this time that they were after technology from a past project, as the warehouse database systems were infiltrated during the heist. FBI Special Agent Brian Painter was dispatched to the facility in order to interview their Facility Chief. According to Murkywater, their internal operatives were successful in stopping the Payday gang from achieving their goal. The Facility Chief of Operations has also assured us that security will be improved to prevent any future incidents of this nature.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "This report has been corrected from an earlier copy that contained several clerical errors due to miscommunication between departments."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "henry's-rock",
    desc: "HR",

}
