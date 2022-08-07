import { ApplicationCommandType, ApplicationCommandOptionType } from "discord-api-types/v10";

export default [
    {
        name: "timestamps",
        description: "Commands for creating custom Discord timestamps.",
        type: ApplicationCommandType.ChatInput,
        options: [
            {
                name: "create",
                description: "Creates Discord timestamps from a date. Uses UTC.",
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: "year",
                        description: "The year (UTC).",
                        type: ApplicationCommandOptionType.Integer,
                        required: true
                    },
                    {
                        name: "month",
                        description: "The month (UTC).",
                        type: ApplicationCommandOptionType.Integer,
                        required: true,
                        choices: [
                            {
                                name: "January",
                                value: 0
                            },
                            {
                                name: "February",
                                value: 1
                            },
                            {
                                name: "March",
                                value: 2
                            },
                            {
                                name: "April",
                                value: 3
                            },
                            {
                                name: "May",
                                value: 4
                            },
                            {
                                name: "June",
                                value: 5
                            },
                            {
                                name: "July",
                                value: 6
                            },
                            {
                                name: "August",
                                value: 7
                            },
                            {
                                name: "September",
                                value: 8
                            },
                            {
                                name: "October",
                                value: 9
                            },
                            {
                                name: "November",
                                value: 10
                            },
                            {
                                name: "December",
                                value: 11
                            }
                        ]
                    },
                    {
                        name: "day",
                        description: "The date of month (0-31) (UTC).",
                        min_value: 0,
                        max_value: 31,
                        type: ApplicationCommandOptionType.Integer,
                        required: true
                    },
                    {
                        name: "hour",
                        description: "The hour (0-23) (UTC).",
                        min_value: 0,
                        max_value: 23,
                        type: ApplicationCommandOptionType.Integer,
                        required: true
                    },
                    {
                        name: "minute",
                        description: "The minute (0-59) (UTC).",
                        min_value: 0,
                        max_value: 59,
                        type: ApplicationCommandOptionType.Integer,
                        required: true
                    }
                ]
            },
            {
                name: "now",
                description: "Creates Discord timestamps based on relative time. Use the options to add or remove time.",
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: "date",
                        description: "The Unix timestamp in seconds. Not using this option will use the current date/time.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    },
                    {
                        name: "years",
                        description: "The amount of years to add or remove.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    },
                    {
                        name: "months",
                        description: "The amount of months to add or remove.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    },
                    {
                        name: "weeks",
                        description: "The amount of weeks to add or remove.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    },
                    {
                        name: "days",
                        description: "The amount of days to add or remove.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    },
                    {
                        name: "hours",
                        description: "The amount of hours to add or remove.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    },
                    {
                        name: "minutes",
                        description: "The amount of minutes to add or remove.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    },
                    {
                        name: "seconds",
                        description: "The amount of seconds to add or remove.",
                        type: ApplicationCommandOptionType.Integer,
                        required: false
                    }
                ]
            }
        ]
    },
    {
        name: "invite",
        description: "Invite this bot!",
        type: ApplicationCommandType.ChatInput
    }
];