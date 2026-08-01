import {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder
} from "discord.js";


import {
    verificarPermissao
} from "../utils/verificarPermissao.js";


import {
    enviarAvisos
} from "../utils/enviarAvisos.js";


import config from "../config/config.js";



export default async function interactionCreate(interaction, client){


try {



    if(interaction.isChatInputCommand()){



        console.log(
            "Comando recebido:",
            interaction.commandName
        );



        if(interaction.commandName === "avisospv"){



            // ===============================
            // VERIFICA CANAL PERMITIDO
            // ===============================

            if(interaction.channel.id !== config.canalAvisos){


                return interaction.reply({

                    content:
                    "❌ Este comando só pode ser utilizado no canal oficial de avisos.",

                    ephemeral:true

                });


            }



            // ===============================
            // VERIFICA PERMISSÃO
            // ===============================

            if(!verificarPermissao(interaction.member)){


                return interaction.reply({

                    content:
                    "Você não possui permissão para usar este sistema.",

                    ephemeral:true

                });


            }



            const modal = new ModalBuilder()

            .setCustomId("modalAviso")

            .setTitle(
                "Envio Global de Aviso"
            );



            const campo = new TextInputBuilder()

            .setCustomId("aviso")

            .setLabel(
                "Aviso oficial"
            )

            .setStyle(
                TextInputStyle.Paragraph
            )

            .setPlaceholder(
                "Digite o comunicado..."
            )

            .setRequired(true);



            modal.addComponents(

                new ActionRowBuilder()

                .addComponents(campo)

            );



            await interaction.showModal(modal);



        }


    }





    if(interaction.isModalSubmit()){



        if(interaction.customId === "modalAviso"){



            await interaction.deferReply({

                ephemeral:true

            });



            const texto = interaction.fields.getTextInputValue(
                "aviso"
            );



            const resultado = await enviarAvisos(

                interaction.guild,

                texto,

                interaction.user

            );



            await interaction.editReply({

                content:

                `✅ Aviso enviado!\n\n`+

                `📨 Total: ${resultado.total}\n`+

                `✅ Enviados: ${resultado.enviados}\n`+

                `⚠️ Falhas: ${resultado.falhas}`

            });



        }


    }



}catch(error){


    console.error(
        "ERRO interactionCreate:",
        error
    );



    if(!interaction.replied && !interaction.deferred){


        await interaction.reply({

            content:
            "❌ Ocorreu um erro ao executar o sistema.",

            ephemeral:true

        }).catch(()=>{});


    }


}



}
