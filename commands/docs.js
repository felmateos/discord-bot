const { ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder } = require("discord.js");

const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'JavaScript',
							description: 'JavaScript documentation',
							value: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
						},
						{
							label: 'Java',
							description: 'Java documentation',
							value: 'https://docs.oracle.com/javase/8/docs/api/',
						},
					),
			);

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Replies with chosen language's documentation"),
    async execute(interaction) {
        await interaction.reply({ content: 'Choose any language below:', components: [row] })
    }
}