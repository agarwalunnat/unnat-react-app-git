import React, { Component } from 'react';
// STEP: 2 #Router
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import TodoComponent from '../Todo/TodoComponent';

export default class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/todo',
                            }}>Todo</NavLink></li>
                            {/* <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li> */}
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact render={() => <h1>No body home</h1>} />
                <Route path="/todo" component={TodoComponent} />
            </div>
        );
    }
}

