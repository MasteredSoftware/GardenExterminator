import { combineReducers, createStore } from 'redux'

import constants, {getRandomEmojiName} from '../../shared'

const hit = (action) => {
	switch (action.type) {
		case 'NO_HIT':
			return {
				name: 'none',
				type: 'MISS'
			};
		case 'GOOD_HIT':
			return {
				name: action.name,
				type: 'GOOD'
			};
		case 'BAD_HIT':
			return {
				name: action.name,
				type: 'BAD'
			};
		default:
			return state
	}
};

const staticState = {
	level_stats_by_level: {
		0: {size:2, points:0, ttl:15},
		1: {size:3, points:100, ttl: 30},
		2: {size:4, points:500, ttl: 90},
		3: {size:5, points:2000, ttl: 360}
	}
};
var initialState = {level:0, hits:[], tiles:[]};

/**
 * tile is a simple state object for each tile shown in the grid
 * @param id
 * @param row
 * @param col
 * @returns {{id: *, row: *, col: *}}
 */
const tile = (id, row, col, tile_state) => {
	return {id, row, col, tile_state};
};

const populateStateForLevel = (state) => {
	var size = staticState.level_stats_by_level[state.level].size;
	for (var row = 0; row < size; row++) {
		for (var col = 0; col < size; col++) {
			var id = row * size + col;
			// make a new tile
			var name = getRandomEmojiName();
			state.tiles.push(tile(id, row, col, {name}));
		}
	}
};
populateStateForLevel(initialState);

const hits = (state = initialState, action) => {
	var newState = Object.assign({}, state);
	switch (action.type) {
		case 'NO_HIT':
		case 'GOOD_HIT':
		case 'BAD_HIT':
			newState.hits.push(hit(action));
			return newState;
		default:
			return state
	}
};

/*
const geApp = combineReducers({
	hits
});

export default geApp
	*/

export default hits;