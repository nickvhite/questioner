const initialState = {};

export default function questions(state = initialState, action) {
	if ( action.type === 'SHOW_QUESTIONS') {
		return state = action.payload;
	}
	return state;
}