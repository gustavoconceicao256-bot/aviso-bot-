import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Bot AVISO FAC GTT online");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("🌐 Servidor web iniciado");
});


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.once("ready", () => {
    console.log(`✅ ${client.user.tag} online`);
});


client.login(process.env.TOKEN);
