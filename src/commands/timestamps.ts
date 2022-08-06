import { APIChatInputApplicationCommandInteraction, APIEmbed, ApplicationCommandOptionType, InteractionResponseType } from "discord-api-types/v10";
import respond from "../utils/respond";

export default (interaction: APIChatInputApplicationCommandInteraction) => {

    const options = interaction.data.options;
    const timestamp = (options && options[0].type === ApplicationCommandOptionType.Number) ? options[0].value : Math.floor(new Date().getTime() / 1000);

    const timestampEmbed: APIEmbed = {
        color: 0x2f3136,
        title: `Timestamps for \`${timestamp}\``,
        footer: { text: "*default" },
        fields: [
            { name: "Short Time", value: `<t:${timestamp}:t>\n\`<t:${timestamp}:t>\``, inline: true },
            { name: "Long Time", value: `<t:${timestamp}:T>\n\`<t:${timestamp}:T>\``, inline: true },
            { name: "Short Date", value: `<t:${timestamp}:d>\n\`<t:${timestamp}:d>\``, inline: true },
            { name: "Long Date", value: `<t:${timestamp}:D>\n\`<t:${timestamp}:D>\``, inline: true },
            { name: "Short Date/Time*", value: `<t:${timestamp}:f>\n\`<t:${timestamp}:f>\`\n\`<t:${timestamp}>\``, inline: true },
            { name: "Long Date/Time", value: `<t:${timestamp}:F>\n\`<t:${timestamp}:F>\``, inline: true },
            { name: "Relative Time", value: `<t:${timestamp}:R>\n\`<t:${timestamp}:R>\``, inline: true },
        ]
    }

    return respond({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: { embeds: [timestampEmbed] }
    });
}