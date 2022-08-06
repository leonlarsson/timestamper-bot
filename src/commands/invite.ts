import { APIActionRowComponent, APIButtonComponent, ComponentType, InteractionResponseType } from "discord-api-types/v10";
import { buildInviteButton } from "../utils/buildButtons";
import respond from "../utils/respond";

export default (): Response => {

    const row: APIActionRowComponent<APIButtonComponent> = {
        type: ComponentType.ActionRow,
        components: [buildInviteButton()]
    };

    return respond({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: { content: `Invite this bot by clicking [here](https://discord.com/oauth2/authorize?client_id=990219994296111124&scope=applications.commands) or the button below.`, components: [row] }
    });
}