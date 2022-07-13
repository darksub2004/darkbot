import { Command } from '@sapphire/framework';
import { Permissions } from 'discord.js';
import { PermissionFlagsBits } from 'discord-api-types/v10';

export abstract class DarkCommand extends Command {
	public constructor(context: Command.Context, options: Command.Options) {
		const resolvedPermission = new Permissions(options.requiredClientPermissions).add(PermissionFlagsBits.EmbedLinks);
		super(context, {
			requiredClientPermissions: resolvedPermission,
			...options
		});
	}
}
