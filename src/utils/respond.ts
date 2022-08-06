import { APIInteractionResponseCallbackData, InteractionResponseType } from "discord-api-types/v10";

export default (response: ResponseData): Response => new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } });

interface ResponseData {
    type: InteractionResponseType,
    data?: APIInteractionResponseCallbackData
};