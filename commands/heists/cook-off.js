const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "COOK OFF\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Cook_Off",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/cookoff.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "This unoccupied shack in the forest was supposedly condemned. City records indicate it was structurally unsound and due for demolition. Its remoteness made it perfect as a place for criminal activity. Investigation showed that it was used as a makeshift meth lab. The compact structure with many windows provided a great many options for providing well-covered fire into the approaches.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "This job shows exactly how tough this gang is. Despite throwing wave after wave of SWAT teams at them, they managed to hold that shack like a bunker, and produce enough meth to flood the streets with ice."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "cook-off",
    desc: "CO",

}
