import { APIEmbedField } from "discord-api-types/v10";

export default (timestamp: number): APIEmbedField[] => {
    return [
        { name: "Short Time", value: `<t:${timestamp}:t>\n\`<t:${timestamp}:t>\``, inline: true },
        { name: "Long Time", value: `<t:${timestamp}:T>\n\`<t:${timestamp}:T>\``, inline: true },
        { name: "Short Date", value: `<t:${timestamp}:d>\n\`<t:${timestamp}:d>\``, inline: true },
        { name: "Long Date", value: `<t:${timestamp}:D>\n\`<t:${timestamp}:D>\``, inline: true },
        { name: "Short Date/Time*", value: `<t:${timestamp}:f>\n\`<t:${timestamp}:f>\`\n\`<t:${timestamp}>\``, inline: true },
        { name: "Long Date/Time", value: `<t:${timestamp}:F>\n\`<t:${timestamp}:F>\``, inline: true },
        { name: "Relative Time", value: `<t:${timestamp}:R>\n\`<t:${timestamp}:R>\``, inline: true },
    ];
}