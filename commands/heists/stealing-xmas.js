const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "STEALING XMAS\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Stealing_Xmas",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/moon.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "It started with an unknown person behaving suspiciously in the street and being challenged by patrolling police officers. The suspect fled and disappeared near the Midtown Mall. Shortly after, what appeared to be the same person was apprehended inside the mall itself, incompetently disguised as Santa Claus and extremely inebriated. As officers were trying to question him, the Payday Gang suddenly appeared at the mall, freeing the prisoner, shooting the mall to pieces, killing police officers and stealing various seemingly random items from the shops. They finished off by blowing the roof open with explosives and airlifting themselves and the prisoner out along with the Mall’s enormous Christmas tree.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "This is a puzzling one. There are so many questions here: Who was the mysterious man in the Santa costume? What is his relation to the clowns? Why did they risk extended confrontation with the police in order steal minor items from the shops in the mall? And the tree?"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "stealing-xmas",
    desc: "SX",

}
