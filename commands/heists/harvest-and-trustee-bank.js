const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE AND **CHANGE COMMAND NAME**
  "title": "**HARVEST AND TRUSTEE BANK**\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Bank_Heist",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/htbank.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "Harvest and Trustee Bank has branches all over Washington. They are generally single-storey constructions, with heavy rear doors, roof access and cameras that are controlled from a locked security room. Most branches will employ three or four security personnel, and teller staff are trained to lower shutters in the event of a robbery.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Forget H&T doing much to put their house in order. I recommend the construction of new training facilities for our teams, model them on these banks. Harvest and Trustee don't seem likely to change their security, as all their losses are covered by the federal government anyway."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "harvest-and-trustee-bank",
    desc: "HATB",

}
