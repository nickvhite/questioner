const initialState = {
	question_1: {
		last_check: '',
		checks: [],
		values: []
	},
	question_2: {
		last_check: '',
		checks: [],
		values: []
	},
	question_3: {
		last_check: '',
		checks: [],
		values: []
	},
	question_4: {
		last_check: '',
		checks: [],
		values: []
	},
	question_5: [],
	question_6: [],
	question_7: '',
	question_8: ''
};

export default function buttons(state = initialState, action) {
	if ( action.type === 'UPDATE_ANSWERS') {
		state[action.payload.name] = Object.assign({}, action.payload.answers);
		return state;
	}
	if ( action.type === 'UPDATE_RANGES') {
		state[action.payload.name] = Object.assign([], action.payload.answers);
		return state;
	}
	if ( action.type === 'UPDATE_USER_DATA') {
		state[action.payload.name] = action.payload.answers;
		return state;
	}
	
	return state;
}