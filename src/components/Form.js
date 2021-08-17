import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {
  const inputTextHandler = (evt) => {
    props.setInputText(evt.target.value);
  };
  const submitTodoHandler = (evt) => {
    evt.preventDefault();
    props.setTodos([
      ...props.todos, {text: props.inputText, complete: false, id: Math.random() * 1000}
    ]);
    props.setInputText('');
  };
  const statusHandler = (evt) => {
    props.setStatus(evt.target.value);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
      <button className="todo-button" type="submit">
        <FontAwesomeIcon icon={faPlusSquare}/>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;