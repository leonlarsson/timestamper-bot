import * as dotenv from "dotenv";
import { Routes } from "discord-api-types/v10";
import data from "./data.js";
import restClient from "../utils/restClient.js";

dotenv.config();
await restClient.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: data })
    .then(() => console.log(`Successfully PUT application commands globally.`)).catch(err => console.log(err));