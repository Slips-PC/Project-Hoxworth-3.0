const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "HEIST NAME\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Biker_Heist",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/born.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "LION'S DEN\nINFO:",
      "value": "The OVERKILL MC have been operating out of Washington D.C. for years, and like the typical biker MO, the OVERKILL MC proudly display their criminal lifestyle. We’ve had some extra eyes on their clubhouse on-and-off for the last two years, ever since we learned about their supposed affiliation with the man called the Elephant.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "This is what we know: Tom \"Rust\" Bishop seems to have betrayed his former biker buddies for a chance to join the Clowns, but also pissing the OVERKILL MC off, making them retaliate by taking an individual by the name of Mike hostage, hoping that would make Rust come to them. Well, their plan succeeded and failed simultaneously. Rust did show up, but with his new allies by his side. An all-out war took place between the two factions, and our own men weren’t enough to stop them. In the end, the PAYDAY gang managed to free Mike the mechanic and escape."
    },
    {
      "name": "INTERCEPTION\nINFO:",
      "value": "Freight railroads are vital to the U.S. economy, and are often used to transport coal and oil across the country. The freight trains mostly have problems with the Freight Train Riders of America, a gang of homeless people who move about by freight hopping in railroad cars. But as far as we can tell, it is not like the OVERKILL MC has used freight trains to transport stolen goods previously. However, this incident will make us investigate the matter further.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Scott Sagano (the biker we arrested after the carnage at the OVERKILL MC clubhouse) provided us with information regarding an advanced type of weaponry being transported on the freight train. We knew the Clowns would show up, so I had all our men ready on standby to intercept the biker operation. Unfortunately, the combined firepower from the Clowns and the Bikers pushed us back, and we were unable to retrieve the weapon. We could only watch as the masked freaks escaped by helicopter."
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "biker-heist",
    desc: "BH",

}
