import { REST } from "@discordjs/rest";
import { getToken } from "./getToken.js";
export default new REST({ version: "10", authPrefix: "Bearer" }).setToken(await getToken());