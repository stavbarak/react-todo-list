import React from 'react';
import TodoItem from './TodoItem.js';
import { ListGroup } from 'react-bootstrap/lib/';

const TodoList = ({todos, remove}) => {
  const todoNode = todos.map((todo) => {
    return (
      <TodoItem todo={todo} key={todo.id} remove={remove}/>
    );
  });
  return (
    <ListGroup className="todoList">{ todoNode }</ListGroup>
  );
}

export default TodoList;