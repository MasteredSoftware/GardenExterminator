/*
 * action types
 */

export const NO_HIT = 'NO_HIT';
export const GOOD_HIT = 'GOOD_HIT';
export const BAD_HIT = 'BAD_HIT';

/*
 * action creators
 */

export function hitNone() {
	return { type: NO_HIT }
}

export function hitGood(name) {
	return { type: GOOD_HIT, name }
}

export function hitBad(name) {
	return { type: BAD_HIT, name }
}