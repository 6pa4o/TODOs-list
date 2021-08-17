import React from 'react';

const Todo = (props) => {
  const deleteHandler = () => {
    props.setTodos(() => {
      return props.todos.filter(todoItem => todoItem.id !== props.todo.id)
    })
  };
  const completeHandler = () => {
    props.setTodos(() => {
      return props.todos.map(todoItem => {
        if(todoItem.id === props.todo.id) {
          return {
            ...todoItem,
            complete: !todoItem.complete,
          };
        }
        return todoItem;
      });
    })
  };
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.complete ? "completed" : ""}`}>{props.text}</li>
      <button onClick={completeHandler} className="complete-btn">complete</button>
      <button onClick={deleteHandler} className="trash-btn">trash</button>
    </div>
  );
};

export default Todo;