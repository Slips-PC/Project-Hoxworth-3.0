const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "CAR SHOP\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Car_Shop",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/carshop.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Teuer dealership had recently received a shipment of the latest model, the Falcogini. The dealership building is a very open construction with many ways in and out. The robbery of the Falcoginis took place early in the evening, while the dealership was still open. Further, it appears that an explosion near the dealership allowed the thieves to avoid the busy rush-hour roads and into deserted tunnels.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "The Payday gang are almost as dangerous behind the wheel of a car as they are behind the barrel of a gun. We’re going to need to invest a lot more in pursuit and interception if we intend to deal with the Payday gang on the road."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "car-shop",
    desc: "CS",

}
