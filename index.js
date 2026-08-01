import { 
    Client, 
    GatewayIntentBits 
} from "discord.js";

import dotenv from "dotenv";
import express from "express";

import interactionCreate from "./events/interactionCreate.js";
import ready from "./events/ready.js";


dotenv.config();


// ===============================
// SERVIDOR WEB PARA O RENDER
// ===============================

const app = express();


app.get("/", (req, res) => {

    res.send("Bot AVISO FAC GTT online");

});


// ===============================
// CONFIGURAÇÃO DO BOT DISCORD
// ===============================

const client = new Client({

    intents: [

        GatewayIntentBits.Guilds,

        GatewayIntentBits.GuildMembers,

        GatewayIntentBits.GuildMessages,

        GatewayIntentBits.MessageContent

    ]

});


// ===============================
// EVENTOS
// ===============================

client.once(
    "ready",
    () => {

        ready(client);


        // ===============================
        // STATUS DO BOT
        // ===============================

        client.user.setActivity(
            "Sistema Oficial de Comunicados",
            {
                type: 3
            }
        );


        console.log(
            "💓 Sistema de atividade iniciado"
        );


    }
);



client.on(
    "interactionCreate",
    interaction => interactionCreate(interaction, client)
);



// ===============================
// KEEP ALIVE INTERNO
// ===============================

setInterval(()=>{


    console.log(
        "💚 Bot ativo:",
        new Date().toLocaleString()
    );


},60000);



// ===============================
// SERVIDOR RENDER ONLINE
// ===============================

app.listen(
    process.env.PORT || 3000,
    () => {

        console.log(
            "🌐 Servidor web iniciado"
        );

    }
);


// ===============================
// LOGIN DISCORD
// ===============================

client.login(
    process.env.TOKEN
);
