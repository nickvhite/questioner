const initialState = {};

export default function buttons(state = initialState, action) {
	if ( action.type === 'SHOW_BUTTONS') {
		state = Object.assign([], state = action.payload);
		return state;
	}
	return state;
}