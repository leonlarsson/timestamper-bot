import * as dotenv from "dotenv";
import { Routes } from "discord-api-types/v10";
import data from "./data.js";
import restClient from "../utils/restClient.js";

dotenv.config();
await restClient.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.DEPLOY_GUILD_ID), { body: data })
    .then(() => console.log(`Successfully PUT application commands in guild ${process.env.DEPLOY_GUILD_ID}.`)).catch(err => console.log(err));