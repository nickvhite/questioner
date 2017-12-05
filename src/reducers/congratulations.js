let initialState = [];

export default function playList(state = initialState, action) {
    if (action.type === 'SHOW_CONGRATULATIONS') {
        return state = action.payload;
    }
    return state;
}