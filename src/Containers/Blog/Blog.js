import React, { Component } from 'react';
// STEP: 2 #Router
import { Route, NavLink, withRouter } from 'react-router-dom';

import './Blog.css';
import TodoComponent from '../Todo/TodoComponent';
import BasicReduxComponent from '../BasicRedux/BasicReduxComponent';

class Blog extends Component {
    render() {
        const { url: basePath } = this.props.match;
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{ pathname: `${basePath}/todo` }}>Todo</NavLink></li>
                            <li><NavLink to={{ pathname: `${basePath}/basicRedux` }}>Basic Redux</NavLink></li>
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
                <Route path="/basicRedux" component={BasicReduxComponent} />
            </div>
        );
    }
}

export default withRouter(Blog);