const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
  "title": "**JEWELRY STORE**\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Jewelry_Store",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/jewstore.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "The Payday gang have hit this one a number of times. Washington is full of stores like this. They can be easily entered at the front and back, and are small enough that a well-rehearsed crew can quickly nullify any resistance.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Security in these places is laughable, but when they’re operating so close to the profit margin, what can you expect? An increase in local patrols might give us a faster heads up if the Payday gang pay a visit."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "jewelry-store",
    desc: "duh",

}
