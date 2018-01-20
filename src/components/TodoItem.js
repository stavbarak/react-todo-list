import React from 'react';
import { ListGroupItem } from 'react-bootstrap/lib/';

const TodoItem = ({todo, remove}) => {
  return (
    <ListGroupItem className="todoItem" onClick={() => { remove(todo.id)} }>
      { todo.text }
    </ListGroupItem>
  );
}


export default TodoItem;