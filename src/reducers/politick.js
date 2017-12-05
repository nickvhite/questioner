const initialState = {};

export default function cancel(state = initialState, action) {
	if ( action.type === 'SHOW_POLITICK') {
		return state = action.payload;
	}
	return state;
}