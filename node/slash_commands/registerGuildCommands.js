import { Routes } from "discord-api-types/v10";
import restClient from "../utils/restClient.js";
import data from "./data.js";
import { clientId } from "../config.js";

const guildId = "99183009621622784";
await restClient.put(Routes.applicationGuildCommands(clientId, guildId), { body: data })
    .then(() => console.log(`Successfully PUT application commands in guild ${guildId}.`)).catch(err => console.log(err));