# Discord Timestamp Bot

**Note: This is mostly a WIP test and a personal learning session. You should probably not use this bot.**

### [Invite this bot](https://discord.com/oauth2/authorize?client_id=990219994296111124&scope=applications.commands).

Commands:

- /timestamps
- /invite

## Hosting

To get started, clone this repo, rename `.env.example` to `.env` and replace the values. Also replace the PUBLIC KEY in `src/utils/verify.ts`

To deploy commands (this currently uses Node), check the NPM scripts.

Then deploy this on [Cloudflare Workers](https://workers.cloudflare.com/).
