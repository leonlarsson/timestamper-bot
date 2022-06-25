import { InteractionType, InteractionResponseType, MessageFlags } from "discord-api-types/v10";
import { verify } from "./utils/verify.js";

export async function handleRequest(request) {

    // Handle interactions from Discord and perform the verification
    if (new URL(request.url).pathname === "/interaction" && request.method === "POST") {
        if (!request.headers.get("X-Signature-Ed25519") || !request.headers.get("X-Signature-Timestamp")) return new Response("NOPE", { status: 401 });
        if (!await verify(request)) return new Response("NOPE", { status: 401 });

        const interaction = await request.json();

        // Handle Discord's PING request
        if (interaction.type === InteractionType.Ping) {
            return respond({ type: InteractionResponseType.Pong });
        }

        // Handle application commands
        if (interaction.type === InteractionType.ApplicationCommand) {

            // test slash command
            if (interaction.data.name === "test") {
                const option = interaction.data.options && interaction.data.options[0]?.value;

                return respond({
                    type: InteractionResponseType.ChannelMessageWithSource,
                    data: {
                        content: `Hello ${interaction.member?.user.username ?? interaction.user.username}${option ? `\n\nEntered option: ${option}` : ""}`
                    }
                });
            }

            // Get info user context menu
            if (interaction.data.name === "Get info") {
                const username = interaction.member.nick ?? interaction.member.user.username;
                const joinedAt = new Date(interaction.member.joined_at);

                return respond({
                    type: InteractionResponseType.ChannelMessageWithSource,
                    data: {
                        content: `Username is ${username}\nThis person joined this server <t:${Math.floor(joinedAt.getTime() / 1000)}:R>.`,
                        flags: MessageFlags.Ephemeral
                    }
                });
            }
        }
    }
}

const respond = response => new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } });