import Fastify from 'fastify';
import { envParseInteger, envParseString } from '@skyra/env-utilities';

const app = Fastify({
	logger: true
});

const start = async () => {
	app.get('/', async (_req, reply) => {
		await reply.type('application/text').code(200);
		return 'Alive';
	});

	app.listen({ port: envParseInteger('SERVER_PORT'), host: envParseString('SERVER_ADDRESS') }, (err) => {
		if (err) {
			app.log.error(err);
			process.exit(1);
		}
	});
};

void start();
