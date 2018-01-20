import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form.js';
import TodoList from './TodoList.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get(this.props.apiUrl)
      .then((result) => {
        this.setState({
            items:result.data
        });
      });
  }

  addTodo = (value) => {
    const todo = {text: value}
    axios.post(this.props.apiUrl, todo)
       .then((result) => {
          this.state.items.push(result.data);
          this.setState({
              data: this.state.items
            });
       });
  }

  handleRemove = (id) => {
    const leftTodos = this.state.items.filter((item) => {
      return item.id !== id;
    });
    axios.delete(`${this.props.apiUrl}/${id}`)
      .then((result) => {
        this.setState({
            items: leftTodos
        });
      })
  }

  render(){
    return (
      <div>
        <div>
          <h1 className="appTitle">What do I need to do?</h1>
       </div> 
       <div className="instructions">(Free type a task to add it to the list. Click on an existing task to remove it.)</div> 
        <Form addTodo={this.addTodo}/>
        <TodoList
          todos={this.state.items}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;