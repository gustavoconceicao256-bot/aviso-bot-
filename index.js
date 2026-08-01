import {
    Client,
    GatewayIntentBits,
    Collection
} from "discord.js";

import dotenv from "dotenv";

import ready from "./Eventos/ready.js";
import interactionCreate from "./Eventos/interactionCreate.js";


dotenv.config();


const client = new Client({

    intents:[

        GatewayIntentBits.Guilds,

        GatewayIntentBits.GuildMembers,

        GatewayIntentBits.DirectMessages

    ]

});



client.commands = new Collection();



client.once(
    "ready",
    () => ready(client)
);



client.on(
    "interactionCreate",
    interaction => interactionCreate(interaction, client)
);



client.login(
    process.env.TOKEN
);
