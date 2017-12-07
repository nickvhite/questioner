const initialState = {};

export default function questions(state = initialState, action) {
	if ( action.type === 'SHOW_LAST_STEP') {
		return state = action.payload;
	}
	return state;
}