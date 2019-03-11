import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions/ActionCreators';

class TodoAsyncComponent extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <React.Fragment>
          <button onClick={this.props.getTodoList}>Get Todo List</button>
        <ul>
          {
            todoList.map(({ id, title }) => {
              return (
                <div key={title}>
                  <li>{title}</li>
                </div>);
            })
          }
        </ul>
      </React.Fragment>

    );
  }
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.list,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoList: () => dispatch(actionCreators.getTodos()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAsyncComponent);