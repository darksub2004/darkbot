import { Listener } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';

@ApplyOptions<Listener.Options>({
	once: true
})
export class ReadyListener extends Listener {
	public run() {
		this.container.logger.info(this.infos);
	}

	private get infos() {
		return `Client Username: ${this.container.client.user?.username}\nClient Tag: ${this.container.client.user?.discriminator}\nClient ID: ${this.container.client.user?.id}`;
	}
}
