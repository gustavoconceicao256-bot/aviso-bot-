import {
    Client,
    GatewayIntentBits,
    Collection
} from "discord.js";

import dotenv from "dotenv";

import ready from "./events/ready.js";
import interactionCreate from "./events/interactionCreate.js";

import avisospv from "./commands/avisospv.js";


dotenv.config();


const client = new Client({

    intents:[

        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers

    ]

});



client.commands = new Collection();



client.commands.set(
    avisospv.data.name,
    avisospv
);



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
