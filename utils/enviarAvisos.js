
import { criarAvisoEmbed } from "../Embeds/avisoEmbed.js";
import { registrarLog } from "./registrarLog.js";


export async function enviarAvisos(guild, texto){


    let enviados = 0;

    let falhas = 0;


    await guild.members.fetch();



    const membros = guild.members.cache.filter(

        membro => !membro.user.bot

    );



    const total = membros.size;



    const mensagem = criarAvisoEmbed(texto);



    for(const membro of membros.values()){



        try{


            await membro.send(mensagem);


            enviados++;



        }catch(error){


            falhas++;


        }



    }



    await registrarLog({

        guild,

        responsavel:
        "Sistema",

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
