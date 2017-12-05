const initialState = {};

export default function range(state = initialState, action) {
	if ( action.type === 'UPDATE_RANGE') {
		return state = action.payload;
	}
	return state;
}