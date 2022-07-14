import '#lib/web';
import '#lib/setup';
import { DarkClient } from '#lib/extensions/DarkClient';

const client = new DarkClient();

const start = async () => {
	client.logger.info('Logging in...');
	await client.login();
	client.logger.info('Success!');
};

void start();
