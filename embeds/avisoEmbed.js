import { EmbedBuilder } from "discord.js";

export function criarAvisoEmbed(texto) {

    return {
        embeds: [
            new EmbedBuilder()
                .setColor("#441387")
                .setTitle("📢 SISTEMA DE AVISO GTT")
                .setDescription(texto)
                .setFooter({
                    text: "FAC GTT • Comunicado Oficial"
                })
                .setTimestamp()
        ]
    };

}
