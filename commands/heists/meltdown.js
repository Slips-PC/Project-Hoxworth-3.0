const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "MELTDOWN\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Meltdown",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/meltdown.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The warehouse beside the docks is registered to the Murkywater Private Security company. We were alerted to an incident there by a phone call from a private citizen. It is unknown what the Payday gang were able to remove from the premises.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "It’s telling that it took a guy nearby, hearing gunfire, to make the call and not the Murkies themselves. That means they don’t want us to know what was taken, and that scares me. I recommend applying more political pressure on those mercenaries. It could be something important."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "meltdown",
    desc: "MD",

}
