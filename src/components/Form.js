import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const Form = ({addTodo}) => {
  return (
    <FormGroup>
      <form onSubmit={(e) => {
          e.preventDefault();
          addTodo(this.inputNode.value);
          this.inputNode.value = '';
        }}>   
          <div className="inputBox"> 
            <FormControl className="todoInput" placeholder="Enter new task" inputRef={node => this.inputNode = node} />
              <Button type="submit" bsStyle="success">add</Button>      
          </div>     
      </form>
    </FormGroup>
  );
};

export default Form;