const initialState = {};

export default function questions(state = initialState, action) {
	if ( action.type === 'SHOW_TABLET') {
		return state = action.payload;
	}
	return state;
}