import { ApplicationCommandType, ApplicationCommandOptionType } from "discord-api-types/v10";

export default [
    {
        name: "test",
        description: "Test command.",
        type: ApplicationCommandType.ChatInput,
        options: [
            {
                name: "username",
                description: "The username.",
                type: ApplicationCommandOptionType.String,
                required: false
            }
        ]
    },
    {
        name: "Get info",
        type: ApplicationCommandType.User
    }
]