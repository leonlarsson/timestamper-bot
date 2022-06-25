import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { clientId } from "../config.js";
import { getToken } from "../src/utils/getToken.js";

const guildId = "99183009621622784";
const rest = new REST({ version: "10", authPrefix: "Bearer" }).setToken(await getToken());
await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
    .then(() => {
        console.log(`Successfully removed application commands in guild ${guildId}.`);
    }).catch(err => console.log);