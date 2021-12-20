const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    description: "I give help to u dum bitches",
    execute(message) {
        const client = message.client;
        const { commands } = client;
        const body = [];
        commands.map(command => {
            body.push("```" + command.name + " — " + (command.description || "no description") + "```")
        })
        const embed = new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Help")
            .setAuthor(client.user.username, client.user.avatarURL(), "https://www.j.yoo-babobo.com/thang.ppnga/bibiai.php")
            .setDescription(body.join(""));
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setStyle("LINK")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=763374856501854238&permissions=412387495488&scope=bot%20applications.commands"),
                new MessageButton()
                    .setLabel("Website")
                    .setStyle("LINK")
                    .setURL("https://www.j.yoo-babobo.com/thang.ppnga/bibiai.php")
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}