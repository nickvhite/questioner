const initialState = {
	range_1: {
		start: [0, 270],
		step: 1,
		range: {
			'min': 0,
			'max': 300
		}
	},
	range_2: {
		start: [0, 25.1],
		step: 0.1,
		range: {
			'min': 0,
			'max': 30
		}
	},
	currentData: [0, 270]
};

export default function range(state = initialState, action) {
	if ( action.type === 'UPDATE_RANGE' ) {
		state[action.payload.name] = Object.assign({}, action.payload.data);
		return state;
	} else if ( action.type === 'UPDATE_RANGE_DATA' ) {
		state[action.payload.name].start = Object.assign([], action.payload.data);
		state.currentData = Object.assign([], action.payload.data);
		state = Object.assign({}, state);
		return state;
	}
	return state;
}