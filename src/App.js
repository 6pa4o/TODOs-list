import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todoItem => todoItem.complete === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todoItem => todoItem.complete === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);



  //manage local todos
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Aleksandr's Todo List</h1>
      </header>
      <Form
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
