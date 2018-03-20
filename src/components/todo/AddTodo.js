import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formInput: '',
        };
    }

    onChange = e => {
        this.setState({
            formInput: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        this.addIt();
    };

    addTodo = e => {
        e.preventDefault();
        this.addIt();
    };

    addIt() {
        const newTodoName = this.state.formInput.trim();
        if (newTodoName) {
            this.props.onNewTodo({
                name: newTodoName
            });
            this.setState({ formInput: '' });
        }

    }

    render() {
        return (
          <form action="" onSubmit={this.onSubmit} className="add-todo">
            <input type="text" name="" 
                placeholder="What to do?" id=""
                onChange={this.onChange}
                value={this.state.formInput} />
            <button type="button" onClick={this.addTodo}>Add</button>
          </form>
        );
    }
}

export default AddTodo;