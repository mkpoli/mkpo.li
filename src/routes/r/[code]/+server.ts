import { error } from '@sveltejs/kit';
import { rareRecordRedirect } from '$lib/rare-redirect';
import type { RequestHandler } from './$types';

export const prerender = false;

export const GET: RequestHandler = ({ params }) => {
	const location = rareRecordRedirect(params.code);
	if (!location) error(404);
	return new Response(null, {
		status: 302,
		headers: {
			location,
			'cache-control': 'public, max-age=3600'
		}
	});
};
