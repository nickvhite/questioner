const initialState = {};

export default function questions(state = initialState, action) {
	if ( action.type === 'SHOW_QUESTIONS') {
		return state = action.payload;
	} else if ( action.type === 'UPDATE_RANGE' ) {
		state = Object.assign({}, state, {
			from: Math.round(action.payload[0]), 
			to: Math.round(action.payload[1])
		});
		return state;
	}
	return state;
}