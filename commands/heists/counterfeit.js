const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "COUNTERFEIT\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Counterfeit",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/pal.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "After arresting Mr. Summers and Mr. Jones, it was discovered they had been running a money printing operation for years in Pensacola, Florida. Embarrassingly enough, the Police Department down there had no idea this was going on and some of them even said they would never have been caught if it wasn't for the PAYDAY gang. Thankfully, that shit-fest is out of our jurisdiction, so we can't get any blame for what went down.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Mitchell Summers and Wilson Jones. These cunning assholes had been running a rather impressive counterfeit operation from a basement in the Pensacola suburbs, for god knows how long. It's not the PAYDAY gang's usual MO to work outside of Washington, which tells me they knew the trip South would be worth it. Not much I can do with this information, except assume that there isn't really any kind of crime they wouldn't do."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "counterfeit",
    desc: "CF",

}
