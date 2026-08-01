
import {
    EmbedBuilder
} from "discord.js";


import config from "../config/config.js";



export function criarLogEmbed(dados){



    const embed = new EmbedBuilder()



    .setColor(

        config.corEmbed

    )


    .setTitle(

        "📢 NOVO AVISO ENVIADO"

    )


    .setDescription(

`
👤 **Responsável:**
${dados.responsavel}

📨 **Membros:**
${dados.total}

✅ **Enviados:**
${dados.enviados}

⚠️ **Falhas:**
${dados.falhas}

📝 **Aviso:**
${dados.aviso}
`

    )

    .setFooter({

        text:

        `${config.nomeServidor} • Sistema de Avisos`

    })


    .setTimestamp();



    return embed;



}
