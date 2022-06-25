import { Routes } from "discord-api-types/v10";
import restClient from "../src/utils/restClient.js";
import { clientId } from "../config.js";

const guildId = "99183009621622784";
await restClient.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
    .then(() => console.log(`Successfully removed application commands in guild ${guildId}.`)).catch(err => console.log(err));