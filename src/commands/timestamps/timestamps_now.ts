import { APIActionRowComponent, APIButtonComponentWithURL, APIChatInputApplicationCommandInteraction, APIEmbed, ComponentType, InteractionResponseType } from "discord-api-types/v10";
import dayjs from "dayjs";
import respond from "../../utils/respond";
import { getInteger, getSubcommand } from "../../utils/getOptions";
import { buildInviteButton } from "../../utils/buildButtons";

export default (interaction: APIChatInputApplicationCommandInteraction): Response => {

    const options = getSubcommand(interaction.data.options)?.options;

    // Get original timestamp (selected "date" or the current time) in seconds
    const originalTimestamp = getInteger(options, "date") ?? Math.floor(new Date().getTime() / 1000);
    const yearsOption = getInteger(options, "years");
    const monthsOption = getInteger(options, "months");
    const weeksOption = getInteger(options, "weeks");
    const daysOption = getInteger(options, "days");
    const hoursOption = getInteger(options, "hours");
    const minutesOption = getInteger(options, "minutes");
    const secondsOption = getInteger(options, "seconds");

    // Create the dayjs object, and perform time modifiers
    let newTime = dayjs.unix(originalTimestamp);
    if (yearsOption) newTime = newTime.add(yearsOption, "year");
    if (monthsOption) newTime = newTime.add(monthsOption, "month");
    if (weeksOption) newTime = newTime.add(weeksOption, "week");
    if (daysOption) newTime = newTime.add(daysOption, "day");
    if (hoursOption) newTime = newTime.add(hoursOption, "hour");
    if (minutesOption) newTime = newTime.add(minutesOption, "minute");
    if (secondsOption) newTime = newTime.add(secondsOption, "second");

    // Get the timestamp in seconds
    const timestamp = newTime.unix();

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