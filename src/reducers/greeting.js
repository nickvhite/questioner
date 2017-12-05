let initialState = [];

export default function playList(state = initialState, action) {
    if (action.type === 'SHOW_GREETING') {
        let state = [...action.payload];
        return state;
    }
    return state;
}