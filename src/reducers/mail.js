const initialState = {};

export default function questions(state = initialState, action) {
	if ( action.type === 'SHOW_MAIL') {
		return state = action.payload;
	}
	return state;
}