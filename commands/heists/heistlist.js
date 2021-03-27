const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {
const embed = {
/////////CHANGE TITLE, LINK, AND **CHANGE COMMAND NAME**
  "title": "**HEISTS**",
  "description": "\njewelry-store: Jewelry Store\nharvest-and-trustee-bank: Bank Heist: Gold/Cash/Deposit/Random\nshadow-raid: Shadow Raid\ngo-bank: GO Bank\ndiamond-store: Diamond Store\narmored transports: All Main Transport Heists\ntrain-heist: Transport: Train Heist\nmallcrasher: Mallcrasher\nfour-stores: Four Stores\nwhite-xmas: White Xmas\nukrainian-job: Ukrainian Job\nmeltdown: Meltdown\naftershock: Aftershock\n\nANYTHING PAST THIS LINE HASNT BEEN ADDED YET DUE TO THE 3.0 OVERHAUL\n-------------------------------------------------------------------------\n\nnightclub: Nightclub\nstealing-xmas: Stealing Xmas\nwatchdogs: Watchdogs\nfirestarter: Firestarter\nrats: Rats\nbig-oil: Big Oil\nframing-frame: Framing Frame\nelection-day: Election Day\nthe-big-bank: The Big Bank\nhotline-miami: Hotline Miami\nhoxton-breakout: Hoxton Breakout\nhoxton-revenge: Hoxton Revenge\nthe-diamond: The Diamond\nggc: Golden Grin Casino\nthe-bomb-dockyard", 
  "color": 4886754,
  "url": "https://pastebin.com/Q0gaydHt",
  "timestamp": message.createdTimestamp,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/avatars/325480677749293086/ce09c1fe156ca70411a32f8d148027de.png",
    "text": "Bot Developed by Slips#9502"
  }
};

message.reply('check your DMs.')
message.author.send("Here's the heists that I've gleaned from my findings:", { embed });
    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "heistlist",
    desc: "Template",

}
