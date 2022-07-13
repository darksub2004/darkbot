import '#lib/setup';
import Fastify from 'fastify';
import { DarkClient } from '#lib/internal/DarkClient';
import { envParseInteger, envParseString } from '@skyra/env-utilities';

const client = new DarkClient();
const app = Fastify({
	logger: true
});

const start = async () => {
	app.get('/', async (_req, reply) => {
		await reply.type('application/json').code(200);
		return 'Alive';
	});

	app.listen({ port: envParseInteger('SERVER_PORT'), host: envParseString('SERVER_ADDRESS') }, (err) => {
		if (err) {
			app.log.error(err);
			process.exit(1);
		}
	});

	client.logger.info('Logging in...');
	await client.login();
	client.logger.info('Success!');
} 

await start();
