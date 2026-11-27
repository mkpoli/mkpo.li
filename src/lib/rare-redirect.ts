const RARE_ORIGIN = 'https://rare.glyphatlas.org';

/** Formats a positive hexadecimal record identifier from `/r/<code>` as a canonical `R+XXXX` URL. */
export function rareRecordRedirect(raw: string): string | null {
	const cleaned = raw.trim().replace(/^r[+ ]/i, '');
	if (!/^[0-9a-f]{1,8}$/i.test(cleaned)) return null;
	const id = Number.parseInt(cleaned, 16);
	if (!Number.isSafeInteger(id) || id <= 0) return null;
	const hex = id.toString(16).toUpperCase().padStart(4, '0');
	return `${RARE_ORIGIN}/R+${hex}`;
}
