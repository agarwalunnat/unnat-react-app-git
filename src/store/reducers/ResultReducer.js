import uniqid from 'uniqid';

const initialState = {
    results: [],
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_RESULT': return { ...state, results: state.results.concat({ id: uniqid(), value: action.result }) };
        case 'DELETE_RESULT': return { ...state, results: state.results.filter(({ id }) => (id !== action.id)) };
        default: return state;
    }
}

export default resultReducer;