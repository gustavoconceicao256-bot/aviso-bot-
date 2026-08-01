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
        "📢 NOVO COMUNICADO ENVIADO"
    )


    .setDescription(

`
━━━━━━━━━━━━━━━━━━━━━━

👤 **Responsável**
${dados.responsavel}

📊 **Estatísticas do Envio**

👥 **Destinatários:**
${dados.total} membros

✅ **Entregues:**
${dados.enviados} membros

⚠️ **Não entregues:**
${dados.falhas} membros

━━━━━━━━━━━━━━━━━━━━━━

📝 **Conteúdo do Aviso**

${dados.aviso}

━━━━━━━━━━━━━━━━━━━━━━

🕒 **Enviado em:**
<t:${Math.floor(Date.now() / 1000)}:d> às <t:${Math.floor(Date.now() / 1000)}:t>

`
    )


    .setFooter({

        text:
        `${config.nomeServidor} • Sistema Oficial de Comunicados`

    })


    .setTimestamp();



    return embed;


}
