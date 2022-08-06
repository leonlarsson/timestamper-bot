import { APIButtonComponent, ButtonStyle, ComponentType } from "discord-api-types/v10";

export const buildInviteButton = () => {
    return {
        type: ComponentType.Button,
        style: ButtonStyle.Link,
        label: "Invite Bot",
        url: "https://discord.com/oauth2/authorize?client_id=990219994296111124&scope=applications.commands"
    } as APIButtonComponent;
}