const initialState = {
    list: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODO': return { ...state, list: action.todos.concat() };
        default: return state;
    }
}

export default todoReducer;