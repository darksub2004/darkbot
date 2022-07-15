import { Precondition } from '@sapphire/framework';
import { envParseString } from '@skyra/env-utilities';
import type { Snowflake } from 'discord-api-types/v10';
import type { CommandInteraction, ContextMenuInteraction } from 'discord.js';

const OwnerId = envParseString('DISCORD_OWNER_ID');

export class OwnerOnlyPrecondition extends Precondition {
	public override async chatInputRun(inter: CommandInteraction) {
		return this.checkOwner(inter.user.id);
	}

	public override async contextMenuRun(inter: ContextMenuInteraction) {
		return this.checkOwner(inter.user.id);
	}

	private async checkOwner(id: Snowflake) {
		return OwnerId.includes(id) ? this.ok() : this.error({ message: 'Only Owner can use this!' });
	}
}
