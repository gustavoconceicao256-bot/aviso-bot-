import {
    REST,
    Routes
} from "discord.js";

import dotenv from "dotenv";

import avisospv from "./commands/avisospv.js";


dotenv.config();



const comandos = [


    avisospv.data.toJSON()


];



const rest = new REST({

    version:"10"

})

.setToken(

    process.env.TOKEN

);



try{


    console.log(
        "🔄 Registrando comandos..."
    );



    await rest.put(

        Routes.applicationGuildCommands(

            process.env.CLIENT_ID,

            process.env.GUILD_ID

        ),


        {

            body: comandos

        }

    );



    console.log(
        "✅ Comandos registrados!"
    );



}catch(error){


    console.error(error);


}
