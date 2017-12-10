let initialState = {};

export default function playList(state = initialState, action) {
    if (action.type === 'SHOW_GREETING') {
        return state = Object.assign({}, action.payload);
    }
    return state;
}