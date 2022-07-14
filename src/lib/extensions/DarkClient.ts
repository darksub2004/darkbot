import { SapphireClient, RegisterBehavior, ApplicationCommandRegistries, LogLevel } from '@sapphire/framework';

export class DarkClient extends SapphireClient {
	public constructor() {
		super({
			intents: ['GUILDS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS'],
			partials: ['CHANNEL'],
			allowedMentions: {
				users: [],
				roles: [],
				parse: ['users', 'roles'],
				repliedUser: false
			},
			shards: 'auto',
			sweepers: {
				messages: {
					lifetime: 3600,
					interval: 1
				}
			},
			logger: {
				level: LogLevel.Debug
			},
			presence: {
				status: 'idle',
				activities: [
					{
						name: 'Hmm...',
						type: 'WATCHING'
					}
				]
			}
		});

		ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite);
	}
}
