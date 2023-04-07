const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("answers with pong."),

    async execute(interaction) {
        await interaction.reply("pong")
    }
}