import config from "../configuração/config.js";

import { criarLogEmbed } from "../Embeds/logEmbed.js";



export async function registrarLog(dados){


    const canal = dados.guild.channels.cache.get(

        config.canalLogs

    );



    if(!canal) return;



    const embed = criarLogEmbed(dados);



    await canal.send({

        embeds:[embed]

    });



}
