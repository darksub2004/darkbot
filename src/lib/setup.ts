process.env.NODE_ENV ??= 'development';

import '@sapphire/plugin-logger/register';
import * as colorette from 'colorette';
import { inspect } from 'node:util';
import { setup } from '@skyra/env-utilities';

setup();

inspect.defaultOptions.depth = 1;

colorette.createColors({ useColor: true });
