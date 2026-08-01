import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import config from "../config/config.js";


export function criarAvisoEmbed(texto) {


    const embed = new EmbedBuilder()

        .setColor(config.corEmbed)

        .setTitle("📢 SISTEMA DE AVISO GTT")

        .setDescription(
            texto
        )

        .setImage(
            config.gifBanner
        )

        .setThumbnail(
            config.gifThumbnail
        )

        .setFooter({

            text: `${config.nomeServidor} • Comunicado Oficial`

        })

        .setTimestamp();



    const botao = new ActionRowBuilder()

        .addComponents(

            new ButtonBuilder()

                .setLabel("Entrar no servidor")

                .setStyle(ButtonStyle.Link)

                .setURL(
                    config.conviteServidor
                )

        );



    return {

        embeds: [
            embed
        ],

        components: [
            botao
        ]

    };

}
