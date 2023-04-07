const { REST, Routes } = require('discord.js')

const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = []

for (const file of commandsFiles) {
    const command = require(path.join(commandsPath, file))
    commands.push(command.data.toJSON())
}


const rest = new REST({version: "10"}).setToken(TOKEN);

(async () => {
    try {
        console.log(`reseted ${commands.length} commands`)

        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log("Commands added successfully")
    } catch (error) {
        console.error(error)
    }
})()
