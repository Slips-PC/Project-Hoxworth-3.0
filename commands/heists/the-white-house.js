const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "THE WHITE HOUSE\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/The_White_House",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/vit.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Payday gang attempted to use the world crisis as an opportunity to enter and steal something from the White House. The audacity of their actions is remarkable, even for the Payday gang. It was also to be their downfall. Working with well-coordinated surveillance and tactics teams, the Clowns were intercepted and successfully stopped. In the brief firefight that ensued, all present members of the gang were killed. Payday mastermind \"Bain\", in a break from his usual M.O., is confirmed to have taken part in the operation and his body has been identified as one of those dead. Subsequent arrests were made to bring in the rest of the gang, effectively ending their reign of crime.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Those damn Murkies almost ruined this one with their clumsiness. Maybe it’s time to retire."
    },
    {
      "name": "NOTE FROM HOXTON:",
      "value": "Sounds like a cover-up. Like they're trying to hide what really happened down there."
    },
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "the-white-house",
    desc: "TWH",

}
