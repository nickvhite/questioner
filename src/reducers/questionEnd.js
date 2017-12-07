const initialState = {};

export default function questions(state = initialState, action) {
	if ( action.type === 'SHOW_QUESTION_END') {
		return state = action.payload;
	}
	return state;
}