const initialState = {};

export default function cancel(state = initialState, action) {
	if ( action.type === 'SHOW_CANCEL') {
		return state = action.payload;
	}
	return state;
}