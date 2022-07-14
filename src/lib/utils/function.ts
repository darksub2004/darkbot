import { envParseArray, envParseString } from '@skyra/env-utilities';
import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { isErr, fromAsync, UserError } from '@sapphire/framework';
import type { ImageData } from '#lib/types/animals';

export function getGuildIds() {
	return envParseArray('DISCORD_TEST_GUILD_ID', []);
}

export async function fetchCatImage() {
	const result = await fromAsync(async () =>
		fetch<ImageData[]>(
			'https://api.thecatapi.com/v1/images/search',
			{
				headers: {
					'X-API-KEY': envParseString('THE_CAT_API')
				}
			},
			FetchResultTypes.JSON
		)
	);

	if (isErr(result)) {
		throw new UserError({
			identifier: 'ImageFetchFailed',
			message: 'Result not found.'
		});
	}

	return result.value;
}

export async function fetchDogImage() {
	const result = await fromAsync(async () =>
		fetch<ImageData[]>(
			'https://api.thedogapi.com/v1/images/search',
			{
				headers: {
					'X-API-KEY': envParseString('THE_DOG_API')
				}
			},
			FetchResultTypes.JSON
		)
	);

	if (isErr(result)) {
		throw new UserError({
			identifier: 'ImageFetchFailed',
			message: 'Result not found.'
		});
	}

	return result.value;
}
