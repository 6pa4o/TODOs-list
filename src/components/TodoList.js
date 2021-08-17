import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map( todoItem => {
          return <Todo
            text={todoItem.text}
            complete={todoItem.complete}
            key={todoItem.id}
            setTodos={props.setTodos}
            todos={props.todos}
            todo={todoItem}
          />
      })}

      </ul>
    </div>
  );
};

export default TodoList;