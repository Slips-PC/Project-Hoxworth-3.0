const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "BROOKLYN BANK\n\n",
  "color": 4886754,
  "url": "https://payday.fandom.com/wiki/Brooklyn_Bank",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  },
  "image": {
    "url": "https://fbi.overkillsoftware.com/img/heistinfo/brb.jpg"
  },
  "author": {
    "name": "FedNet 1.3.3.7n",
    "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
  },
  "fields": [
    {
      "name": "INFO:",
      "value": "In what appears to be a growing pattern of non-standard operational behaviors, the Payday gang unexpectedly hit the Brooklyn branch of the Harvest-Trustee bank on December 21, 2017. The specifics of this robbery are puzzling, as the Payday gang did not abscond with the bulk of the money in the bank, instead breaking open the floor of the vault to, it is suspected, recover some other item of unknown nature and value. The fact that the heist was carried out so close to the incident in Los Angeles may be coincidental, but the Payday gang is not known for spreading itself thinly across the country. Coordination with the Los Angeles branch on the matter has so far yielded very little.\n\n"
    },
    {
      "name": "NOTES:",
      "value": "Bank foundation poured early 20th c. Object must have been there a long time. No records of item in vault floor or other anomalies in building plans. Why change in focus? Possible connection to assault in D.C.?"
    }
  ]
};
message.channel.send("Here's what I've got:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "brooklyn-bank",
    desc: "BB",

}
