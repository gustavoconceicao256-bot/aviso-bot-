import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import express from "express";

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
// BOT ONLINE
// ===============================

client.once("ready", () => {
    console.log(`✅ ${client.user.tag} online`);
});


// ===============================
// SERVIDOR RENDER ONLINE
// ===============================

app.listen(process.env.PORT || 3000, () => {
    console.log("🌐 Servidor web iniciado");
});


// ===============================
// LOGIN DISCORD
// ===============================

client.login(process.env.TOKEN);
