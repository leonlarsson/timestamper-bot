import * as dotenv from "dotenv";
import { REST } from "@discordjs/rest";

dotenv.config();
export default new REST({ version: "10" }).setToken(process.env.CLIENT_TOKEN);