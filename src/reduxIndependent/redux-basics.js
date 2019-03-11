const redux = require('redux');

const initialState = {
    counter: 1,
}

// REDUCER
const rootReducer = (currentState = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + 1,
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + action.value,
        };
    }
        return currentState;
}

// STORE
const store = redux.createStore(rootReducer);
console.log(store.getState());

// SUBSCRIPTION
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// DISPATCHING ACTION
store.dispatch({
    type: 'INC_COUNTER'
});

store.dispatch({
    type: 'ADD_COUNTER',
    value: 10,
});

