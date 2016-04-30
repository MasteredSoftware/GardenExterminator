import { combineReducers } from 'redux'

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

const hits = (state = {level:0, points:0, hits:[]}, action) => {
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

const geApp = combineReducers({
	hits
});

export default geApp