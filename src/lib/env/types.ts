import type { IntegerString, ArrayString } from '@skyra/env-utilities';

export interface MyEnv {
	DISCORD_TOKEN: string;
	DISCORD_APPLICATION_ID: string;
	DISCORD_TEST_GUILD_ID: ArrayString;
	DISCORD_SECRET: string;
	DISCORD_OWNER_ID: string;
	DISCORD_PUBLIC_KEY: string;
	SERVER_ADDRESS: string;
	SERVER_PORT: IntegerString;
	THE_CAT_API: string;
	THE_DOG_API: string;
}
