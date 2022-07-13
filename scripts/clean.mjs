import { URL } from 'node:url';
import { rm } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const build = new URL('build/', root);

await rm(build, { recursive: true });