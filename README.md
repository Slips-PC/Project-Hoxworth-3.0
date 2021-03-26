# Project-Hoxworth-3.0
A discord.js-based bot dedicated to porting over the entirety of Overkill Software's "FBI Files" Payday 2 Information Repository. Also includes guides for perk decks. Protected under Mozilla Public License V2.0.

# What you need:
* A Windows, MacOS, or Linux-based machine.
* [Node.JS](https://nodejs.org/en/download/).
* The [nodemon package](https://github.com/remy/nodemon) for Node.JS (if you already have this installed or know how to run a JS package in node, you can skip this one.)

# How To Use:
**WARNING: THIS PRESUMES THAT YOU ALREADY HAVE CREATED THE BOT, COPIED IT'S TOKEN, AND ADDED IT TO A SERVER OF YOUR CHOICE. IF YOU DO NOT KNOW HOW TO DO THAT, GOOGLE IT.**
---
1. Download the Project Hoxworth folder. Put it somewhere easily accessible in the command line.
2. Create a folder named "botsettings.json". Within it, put this:
`{
	"token": "Your Token Here",
	"prefix": "$h_",
	"status": "Whatever status you want",
	"statusType": "WATCHING" //Either WATCHING, LISTENING, OR PLAYING
}
`
4. Open up the node.js **command prompt** (not the regular node.js program) and navigate to the Project Hoxworth folder.
5. Type `npm run start` once you have entered the folder. The bot should activate. To test it, type `$h ping`, or whatever you changed the prefix to earlier in setup if you changed the prefix.

# How to find commands:
The commands are all listed in a pastebin, which can be found by typing `{prefix}help`, or [here](https://pastebin.com/Q0gaydHt).

# How to get put in credits:
If you wish to be put into the "credits" command, make at least one pull request that either adds a new feature or another command in the case of the FBI Files commands.

