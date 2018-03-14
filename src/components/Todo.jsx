import React, { Component } from 'react';

import '../styles/components/todo.css';
import { processTodos, storeTodos } from '../utils/processUserData';

export class Todo extends Component {
    constructor(props) {
        super(props);

        var todos = processTodos();
        
        //temp
        this.state = {
            newTodo: "", //this not temp
            todos: todos
        }

        this.loadTodos = this.loadTodos.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.clearTodos = this.clearTodos.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        storeTodos(this.state.todos);
    }

    loadTodos() {

        const { todos } = this.state;
        
        return todos.map((todoObj, index) => {
            return (
                <li key={index} className={this.checkTodo(todoObj)} onClick={this.handleTodoClick.bind(this, index)}>{todoObj.todo}</li>
                );
        });

    }

    handleTodoClick(index, e) {
        var newState = this.state;
        newState.todos[index].checked = !newState.todos[index].checked;
        this.setState(newState);
    }

    checkTodo(todo) {
        if (todo.checked) {
            return "checked";
        }

        return;
    }

    handleChange(e) {
        var newState = this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleInputKeyPress(e) {
        if (e.key === 'Enter') {

            //must update props instead
            var newState = this.state;

            const newTodo = {
                todo: e.target.value,
                checked: false
            }
            newState.todos.push(newTodo);

            //keep
            newState.newTodo = "";

            this.setState(newState);
        }
    }

    clearTodos() {
        var newState = this.state;
        newState.todos = [];
        this.setState(newState);
    }

    render() {
        return (
            <div className="todo-container">
                <input 
                    className="form-control" 
                    type="text" 
                    id="todo-create" 
                    name="newTodo" 
                    value={this.state.newTodo} 
                    onChange={this.handleChange} 
                    onKeyPress={this.handleInputKeyPress} />
                <ul id="todo-list">
                  {this.loadTodos()}  
                </ul>
                <button className="clear-btn btn btn-secondary" onClick={this.clearTodos}>Clear</button>
            </div>
            )
    }
}

export default Todo;