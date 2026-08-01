import { criarAvisoEmbed } from "../embeds/avisoEmbed.js";
import { registrarLog } from "./registrarLog.js";
import config from "../config/config.js";


export async function enviarAvisos(guild, texto, responsavel){


    let enviados = 0;

    let falhas = 0;



    await guild.members.fetch();



    let membros = guild.members.cache.filter(

        membro => !membro.user.bot

    );



    // ===============================
    // MODO TESTE
    // ===============================

    if(config.MODO_TESTE){


        membros = membros.filter(

            membro => membro.id === config.USUARIO_TESTE

        );


    }



    const total = membros.size;



    const mensagem = criarAvisoEmbed(texto);



    for(const membro of membros.values()){



        try{


            await membro.send(mensagem);


            enviados++;



        }catch(error){


            console.error(

                "Erro enviando DM:",

                membro.user.tag

            );


            falhas++;


        }



    }



    await registrarLog({


        guild,


        responsavel,


        total,


        enviados,


        falhas,


        aviso:texto


    });



    return {


        total,

        enviados,

        falhas


    };


}
