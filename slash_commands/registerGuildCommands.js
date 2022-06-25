import fetch from "node-fetch";
import data from "./data.js";
import { clientId } from "../config.js";
import { getToken } from "../src/utils/getToken.js";

const guildId = "99183009621622784";

const url = `https://discord.com/api/v10/applications/${clientId}/guilds/${guildId}/commands`;

const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${await getToken()}`
};

const registerCommandsRequest = await fetch(url, { method: "PUT", headers, body: JSON.stringify(data) })
const registerCommandsResponse = await registerCommandsRequest.json();
console.log(JSON.stringify(registerCommandsResponse, null, 2));