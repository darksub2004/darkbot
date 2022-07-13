import type { MyEnv } from '#env/types';

declare module '@skyra/env-utilities' {
	interface Env extends MyEnv {}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		OwnerOnly: never;
	}
}
