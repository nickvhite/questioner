const initialState = {
    preloading: true,
    buttons: false,
    greeting: false,
    cancel: false,
    politick: false,
    tablet: false,
    congratulations: false,
    questions: false
};

export default function preloader(state = initialState, action) {
    if ( action.type === 'CREATE_PRELOADER') {
        state.preloading = action.payload;
    } else if ( action.type === 'CREATE_GREETING') {
        state.greeting = action.payload;
    } else if ( action.type === 'CREATE_BUTTONS' ) {
        state.buttons = action.payload;
    } else if ( action.type === 'CREATE_CANCEL' ) {
		state.cancel = action.payload;
	} else if ( action.type === 'CREATE_POLITICK' ) {
		state.politick = action.payload;
	} else if ( action.type === 'CREATE_TABLET' ) {
        state.tablet = action.payload;
    } else if ( action.type === 'CREATE_CONGRATULATIONS' ) {
        state.congratulations = action.payload;
    } else if ( action.type === 'CREATE_QUESTIONS' ) {
        state.questions = action.payload;
    }
    return state;
}