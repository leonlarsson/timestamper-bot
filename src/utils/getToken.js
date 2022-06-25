import fetch from "node-fetch";
import { clientId, clientSecret } from "../../config.js";

const data = new URLSearchParams();
data.append("grant_type", "client_credentials");
data.append("scope", 'applications.commands applications.commands.update');

const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`
};

export const getToken = async () => {
    const request = await fetch("https://discord.com/api/oauth2/token", { method: "POST", body: data.toString(), headers });
    const response = await request.json();
    return response.access_token;
}