import { registrarLog } from "../utils/registrarLog.js";
import config from "../config/config.js";


export async function enviarAvisos(guild, texto, responsavel){


    let enviados = 0;

    let falhas = 0;



    // Busca todos os membros do servidor

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



    console.log(
        "Membros encontrados:",
        total
    );



    // ===============================
    // ENVIO DOS PVs
    // ===============================

    for(const membro of membros.values()){



        try{


            await membro.send({

                content:

                `📢 **SISTEMA DE AVISO GTT**\n\n${texto}`

            });



            enviados++;



            console.log(

                "Enviado para:",

                membro.user.tag

            );



        }catch(error){



            falhas++;



            console.log(

                "Falha ao enviar para:",

                membro.user.tag,

                "|",

                error.message

            );


        }



    }



    // ===============================
    // LOG
    // ===============================

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
