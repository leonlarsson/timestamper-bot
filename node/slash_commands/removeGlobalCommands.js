import * as dotenv from "dotenv";
import { Routes } from "discord-api-types/v10";
import restClient from "../utils/restClient.js";

dotenv.config();
await restClient.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
    .then(() => console.log(`Successfully removed application commands globally.`)).catch(err => console.log(err));