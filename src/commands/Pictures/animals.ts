import { ApplyOptions } from '@sapphire/decorators';
import type { ChatInputCommand } from '@sapphire/framework';
import { DarkCommand } from '#lib/extensions/internal/DarkCommand';
import { fetchCatImage, fetchDogImage, getGuildIds } from '#utils/function';
import { MessageEmbed } from 'discord.js';

@ApplyOptions<ChatInputCommand.Options>({
	description: 'Get Animal Images'
})
export class AnimalCommand extends DarkCommand {
	public override async chatInputRun(inter: ChatInputCommand.Interaction) {
		const Subcommand = inter.options.getSubcommand();
		const embeds = new MessageEmbed().setColor('ORANGE').setFooter({
			text: `User '${inter.user.tag}'`
		});

		switch (Subcommand) {
			case 'cat': {
				const r = await fetchCatImage();
				embeds.setImage(r[0].url);
			}
				break;
			case 'dog': {
				const r = await fetchDogImage();
				embeds.setImage(r[0].url);
			}
		}

		await inter.reply({ embeds: [embeds] });
	}

	public override registerApplicationCommands(reg: ChatInputCommand.Registry) {
		reg.registerChatInputCommand(
			(builder) =>
				builder
					.setName(this.name)
					.setDescription(this.description)
					.addSubcommand((option) => option.setName('cat').setDescription('Cat Image'))
					.addSubcommand((option) => option.setName('dog').setDescription('Dog Image')),
			{
				idHints: [],
				guildIds: getGuildIds()
			}
		);
	}
}
