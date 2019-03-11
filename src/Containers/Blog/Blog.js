import React, { Component } from 'react';
// STEP: 2 #Router
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import TodoComponent from '../Todo/TodoComponent';
import BasicReduxComponent from '../BasicRedux/BasicReduxComponent';
import TodoAsyncComponent from '../ReduxAsync/TodoAsyncComponent'

export default class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{pathname: '/todo'}}>Todo</NavLink></li>
                            <li><NavLink to={{pathname: '/basicRedux'}}>Basic Redux</NavLink></li>
                            <li><NavLink to={{pathname: '/asyncRedux'}}>Async Redux</NavLink></li>
                            {/* <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li> */}
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1>No body home</h1>} />
                <Route path="/todo" component={TodoComponent} />
                <Route path="/basicRedux" component={BasicReduxComponent} />
                <Route path="/asyncRedux" component={TodoAsyncComponent} />
            </div>
        );
    }
}

