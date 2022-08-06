import { ApplicationCommandType, ApplicationCommandOptionType } from "discord-api-types/v10";

export default [
    {
        name: "timestamps",
        description: "Displays Discord timestamps.",
        type: ApplicationCommandType.ChatInput,
        options: [
            {
                name: "date",
                description: "The UNIX timestamp in seconds. Not using this option will use the current date/time.",
                type: ApplicationCommandOptionType.Number,
                required: false
            }
        ]
    },
    {
        name: "invite",
        description: "Invite this bot!",
        type: ApplicationCommandType.ChatInput
    }
]