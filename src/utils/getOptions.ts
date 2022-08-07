import {
    ApplicationCommandOptionType,
    APIApplicationCommandInteractionDataOption,
    APIApplicationCommandInteractionDataSubcommandOption,
    APIApplicationCommandInteractionDataIntegerOption,
    APIApplicationCommandInteractionDataStringOption,
    APIApplicationCommandInteractionDataBooleanOption
} from "discord-api-types/v10";

export const getString = (options: APIApplicationCommandInteractionDataOption[] | undefined, optionName: string): string | null => {
    const option = options?.find((opt): opt is APIApplicationCommandInteractionDataStringOption => opt.name === optionName);
    return option?.value ?? null;
}

export const getInteger = (options: APIApplicationCommandInteractionDataOption[] | undefined, optionName: string): number | null => {
    const option = options?.find((opt): opt is APIApplicationCommandInteractionDataIntegerOption => opt.name === optionName);
    return option?.value ?? null;
}

export const getBoolean = (options: APIApplicationCommandInteractionDataOption[] | undefined, optionName: string): boolean | null => {
    const option = options?.find((opt): opt is APIApplicationCommandInteractionDataBooleanOption => opt.name === optionName);
    return option?.value ?? null;
}

export const getSubcommand = (options: APIApplicationCommandInteractionDataOption[] | undefined): APIApplicationCommandInteractionDataSubcommandOption | null => {
    const option = options?.find((opt): opt is APIApplicationCommandInteractionDataSubcommandOption => opt.type === ApplicationCommandOptionType.Subcommand);
    return option ?? null;
}