import Fastify from 'fastify';
import { envParseInteger, envParseString } from '@skyra/env-utilities';

const app = Fastify({
	logger: true
});

app.get('/', async (_req, reply) => {
	await reply.type('application/json').code(200);
	return 'Alive';
});

const start = async () => {
	try {
		app.listen({ port: envParseInteger('SERVER_PORT'), host: envParseString('SERVER_ADDRESS') });
	}
	catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

void start();
