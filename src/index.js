import React from 'react';
import ReactDOM from 'react-dom';
// Step#1 redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Step#2 redux
import { Provider } from 'react-redux';
// Redux thunk introduced
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reducer from './store/DEPRICATED---reducer';
import CounterReducer from './store/reducers/CounterReducer';
import ResultReducer from './store/reducers/ResultReducer';
import TodoReducer from './store/reducers/TodoReducer';

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: ResultReducer,
    todo: TodoReducer,
});

// Created own middleware
const loggerReducer = (store) => {
    return (next) => {
        return (action) => {
            const result = next(action);
            console.log('MiddleWare', store.getState());
            return result;
        }
    }
}
const store = createStore(rootReducer, applyMiddleware(loggerReducer, thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
