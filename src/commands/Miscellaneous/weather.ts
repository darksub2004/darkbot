import { ApplyOptions } from '@sapphire/decorators';
import type { ChatInputCommand } from '@sapphire/framework';
import { DarkCommand } from '#lib/extensions/internal/DarkCommand';
import { getGuildIds } from '#lib/utils/function';

@ApplyOptions<ChatInputCommand.Options>({
	description: 'View Weather Data'
})
export class MiscCommand extends DarkCommand {
	public override async chatInputRun(inter: ChatInputCommand.Interaction) {
		await inter.reply({ content: 'Soon.' });
	}

	public override registerApplicationCommands(reg: ChatInputCommand.Registry) {
		reg.registerChatInputCommand((builder) => builder.setName(this.name).setDescription(this.description), {
			idHints: ['997036744308437072'],
			guildIds: getGuildIds()
		})
	}
}
