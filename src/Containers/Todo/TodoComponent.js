import React, { Component } from 'react';
import uniqid from 'uniqid';

function TaskModel(name, status) {
  this.name = name || '';
  this.status = status || 'pending';
  this.id = uniqid();
}
const defaultTask = new TaskModel();

export default class TodoComponent extends Component {
  state = {
    incomingTask: defaultTask,
    DEFAULT_TODO: [
      new TaskModel('get bread'),
      new TaskModel('study german'),
      new TaskModel('code'),
      new TaskModel('play'),
    ],
  }

  removeTodo = (id) => {
    // OPTION 1 
    // const d = [...this.state.DEFAULT_TODO];
    // d.splice(index, 1);
    // this.setState({
    //   DEFAULT_TODO: d,
    // });
    // OPTION 2 
    this.setState({
      DEFAULT_TODO: this.state.DEFAULT_TODO.filter((todoItem) => todoItem.id !== id),
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const { DEFAULT_TODO, incomingTask } = this.state;
    this.setState({
      DEFAULT_TODO: [incomingTask, ...DEFAULT_TODO],
      incomingTask: defaultTask
    })
  }

  onHandleChange = (e) => {
    this.setState({
      incomingTask: new TaskModel(e.target.value),
    })
  }

  editTodo = (id) => {
    const { DEFAULT_TODO } = this.state;
    const editedTask = DEFAULT_TODO.filter(
      (todoItem) => todoItem.id === id).pop();

    const defaultCopy = DEFAULT_TODO.filter(
      (todoItem) => todoItem.id !== id);

    this.setState({
      incomingTask: editedTask,
      DEFAULT_TODO: defaultCopy,
    });
  }

  render() {
    const { DEFAULT_TODO } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.addItem(e)}>
          <input
            placeholder="Task"
            onChange={(event) => this.onHandleChange(event)}
            value={this.state.incomingTask.name}
          />
          <button type="submit"> Add Task </button>
        </form>
        <TodoList
          todoList={DEFAULT_TODO}
          delete={(id) => {
            this.removeTodo(id)
          }}
          edit={(id) => {
            this.editTodo(id)
          }}
        />
      </div>
    );
  }
}


const TodoList = (props) => {
  return (
    <div>
      {props.todoList
        .map((todoItem) => (
          <div key={todoItem.id}>
            <span>{todoItem.name}</span>
            <button onClick={() => {
              props.edit(todoItem.id)
            }}>Edit</button>
            <button onClick={() => {
              props.delete(todoItem.id)
            }}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}