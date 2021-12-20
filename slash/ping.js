const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Ping da bot"),
	async execute(interaction) {
		await interaction.reply("Pong! :ping_pong:\nalso fuck u");
	},
};