import {

    EmbedBuilder,

    ActionRowBuilder,

    ButtonBuilder,

    ButtonStyle

} from "discord.js";


import config from "../config/config.js";



export function criarAvisoEmbed(aviso){



    const embed = new EmbedBuilder()



    .setColor(

        config.corEmbed

    )


    .setTitle(

        "📢 SISTEMA DE AVISO GTT"

    )


    .setDescription(

        aviso

    )


    .setThumbnail(

        config.gifThumbnail

    )


    .setImage(

        config.gifBanner

    )


    .setFooter({

        text:

        `${config.nomeServidor} • Comunicado Oficial`

    })


    .setTimestamp();





    const botao = new ActionRowBuilder()

    .addComponents(


        new ButtonBuilder()

        .setLabel(
            "Abrir Servidor"
        )

        .setEmoji(
            "🔗"
        )

        .setStyle(
            ButtonStyle.Link
        )

        .setURL(

            config.conviteServidor

        )


    );




    return {


        embeds:[embed],


        components:[botao]


    };



}
