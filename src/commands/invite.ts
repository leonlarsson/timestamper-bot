import { InteractionResponseType } from "discord-api-types/v10";
import respond from "../utils/respond";

export default () => {
    return respond({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: { content: "https://discord.com/oauth2/authorize?client_id=990219994296111124&scope=applications.commands%20bot" }
    });
}