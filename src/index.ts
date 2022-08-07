import {
    InteractionType,
    InteractionResponseType,
    ApplicationCommandType,
    APIPingInteraction,
    APIChatInputApplicationCommandInteraction
} from "discord-api-types/v10";
import timestampsCreateCommand from "./commands/timestamps/timestamps_create";
import timestampsNowCommand from "./commands/timestamps/timestamps_now";
import inviteCommand from "./commands/invite";
import respond from "./utils/respond";
import { verify } from "./utils/verify";
import { getSubcommand } from "./utils/getOptions";

export default {
    async fetch(request: Request): Promise<Response> {

        // Handle interactions from Discord and perform the verification
        if (new URL(request.url).pathname === "/interactions" && request.method === "POST") {
            if (!request.headers.get("X-Signature-Ed25519") || !request.headers.get("X-Signature-Timestamp")) return new Response("NOPE", { status: 401 });
            if (!await verify(request)) return new Response("NOPE", { status: 401 });

            const interaction: APIPingInteraction | APIChatInputApplicationCommandInteraction = await request.json();

            // Handle Discord's PING request
            if (interaction.type === InteractionType.Ping) {
                return respond({ type: InteractionResponseType.Pong });
            }

            // Return if interaction type is not ChatInput
            if (interaction.data.type !== ApplicationCommandType.ChatInput) {
                return respond({ type: InteractionResponseType.ChannelMessageWithSource, data: { content: "Not a supported command type." } });
            }

            // Handle commands
            switch (interaction.data.name) {
                case "timestamps":
                    const subcommand = getSubcommand(interaction.data.options);
                    if (subcommand?.name === "create") return timestampsCreateCommand(interaction);
                    if (subcommand?.name === "now") return timestampsNowCommand(interaction);
                    return respond({
                        type: InteractionResponseType.ChannelMessageWithSource,
                        data: { content: "Unknown subcommand on `/timestamps`" }
                    });
                case "invite":
                    return inviteCommand();
                default:
                    return respond({
                        type: InteractionResponseType.ChannelMessageWithSource,
                        data: { content: "Unknown command." }
                    });
            }
        }

        // Not a post request
        return new Response("Hello there.");
    }

}