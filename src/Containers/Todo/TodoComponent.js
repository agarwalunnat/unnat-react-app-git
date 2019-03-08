import React, { Component } from 'react';
import uniqid from 'uniqid';

function TaskModel(name = '', isDone = false) {
  this.name = name;
  this.isDone = isDone;
  this.id = uniqid();
}
const defaultTask = new TaskModel();

export default class TodoComponent extends Component {
  state = {
    incomingTask: defaultTask,
    todoList: [
      new TaskModel('get bread'),
      new TaskModel('study german'),
      new TaskModel('code'),
      new TaskModel('play'),
    ],
  }

  removeTodo = (id) => {
    // OPTION 1 
    // const d = [...this.state.todoList];
    // d.splice(index, 1);
    // this.setState({
    //   todoList: d,
    // });
    // OPTION 2 
    this.setState({
      todoList: this.state.todoList.filter((todoItem) => todoItem.id !== id),
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const { todoList, incomingTask } = this.state;
    this.setState({
      todoList: [incomingTask, ...todoList],
      incomingTask: defaultTask
    })
  }

  onHandleChange = (e) => {
    this.setState({
      incomingTask: new TaskModel(e.target.value),
    })
  }

  editTodo = (id) => {
    const { todoList } = this.state;

    const editedTask = todoList.filter(
      (todoItem) => todoItem.id === id).pop();

    const defaultCopy = todoList.filter(
      (todoItem) => todoItem.id !== id);

    this.setState({
      incomingTask: editedTask,
      todoList: defaultCopy,
    });
  }

  doneTodo = (id) => {
    const { todoList } = this.state;

    const todo = todoList.filter(
      (todoItem) => todoItem.id === id).pop();
    todo.isDone = true;
    
    const defaultCopy = todoList.filter(
      (todoItem) => todoItem.id !== id);

    this.setState({
      todoList: [...defaultCopy, todo],
    });
  }

  render() {
    const { todoList } = this.state;
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
          todoList={todoList}
          delete={(id) => this.removeTodo(id)}
          edit={(id) => this.editTodo(id)}
          done={(id) => this.doneTodo(id)}
        />
      </div>
    );
  }
}

const TodoList = (props) => {
  return (
    <div>
      {props.todoList
        .map(({ id, name, isDone }) => (
          <div key={id}>
            <span style={isDone ? { textDecoration: 'line-through' } : {}}>{name}</span>
            <button onClick={() => props.edit(id)}>Edit</button>
            <button onClick={() => props.delete(id)}>Delete</button>
            <button 
            onClick={() => props.done(id)}
            style={isDone ? { display: 'none' } : {}}
            >Mark Done</button>
          </div>
        ))
      }
    </div>
  )
}