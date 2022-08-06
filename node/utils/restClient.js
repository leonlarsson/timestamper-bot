import { REST } from "@discordjs/rest";
import { clientToken } from "../config.js";
export default new REST({ version: "10" }).setToken(clientToken);