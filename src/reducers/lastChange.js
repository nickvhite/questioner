const initialState = {};

export default function buttons(state = initialState, action) {
	if ( action.type === 'UPDATE_LAST_CHANGE') {
		state[action.payload.name] = action.payload.data;
		return state;
	}
	return state;
}