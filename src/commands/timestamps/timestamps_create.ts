import { APIActionRowComponent, APIButtonComponentWithURL, APIChatInputApplicationCommandInteraction, APIEmbed, ComponentType, InteractionResponseType } from "discord-api-types/v10";
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import utc from "dayjs/plugin/utc";
import respond from "../../utils/respond";
import { getInteger, getSubcommand } from "../../utils/getOptions";
import { buildInviteButton } from "../../utils/buildButtons";
dayjs.extend(objectSupport);
dayjs.extend(utc);

export default (interaction: APIChatInputApplicationCommandInteraction): Response => {

    const options = getSubcommand(interaction.data.options)?.options;

    // Get original timestamp (selected "date" or the current time) in seconds
    const year = getInteger(options, "year")!;
    const month = getInteger(options, "month")!;
    const day = getInteger(options, "day")!;
    const hour = getInteger(options, "hour")!;
    const minute = getInteger(options, "minute")!;

    // Create the dayjs object, and get the Unix timestamp in seconds
    const timestamp = dayjs.utc({ year, month, day, hour, minute, second: 0 }).unix();

    const timestampEmbed: APIEmbed = {
        color: 0x2f3136,
        title: `Timestamps for \`${timestamp}\``,
        description: `Year: **${year}**, Month: **${month}**, Day: **${day}**, Hour: **${hour}**, Minute: **${minute}**, Second: **0**`,
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
    };

    const row: APIActionRowComponent<APIButtonComponentWithURL> = {
        type: ComponentType.ActionRow,
        components: [buildInviteButton()]
    };

    return respond({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: { embeds: [timestampEmbed], components: [row] }
    });
}