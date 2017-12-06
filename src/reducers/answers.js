const initialState = {
	question_1: [],
	question_2: [],
	question_3: [],
	question_4: [],
	question_5: [],
	question_6: [],
	question_7: []
};

export default function buttons(state = initialState, action) {
	if ( action.type === 'UPDATE_ANSWERS') {
		state[action.payload.name] = Object.assign([], action.payload.answers);
		return state;
	}
	return state;
}