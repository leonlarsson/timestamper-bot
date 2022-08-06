import { APIChatInputApplicationCommandInteraction, ApplicationCommandOptionType } from "discord-api-types/v10";

export const getString = (interaction: APIChatInputApplicationCommandInteraction, optionName: string): string | null => {
    const option = interaction.data.options?.find(opt => opt.name === optionName);
    return option?.type === ApplicationCommandOptionType.String ? option.value : null;
}

export const getInteger = (interaction: APIChatInputApplicationCommandInteraction, optionName: string): number | null => {
    const option = interaction.data.options?.find(opt => opt.name === optionName);
    return option?.type === ApplicationCommandOptionType.Integer ? option.value : null;
}

export const getBoolean = (interaction: APIChatInputApplicationCommandInteraction, optionName: string): boolean | null => {
    const option = interaction.data.options?.find(opt => opt.name === optionName);
    return option?.type === ApplicationCommandOptionType.Boolean ? option.value : null;
}