//import './App.css';

import React from "react";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import Todoitem from "./components/Todoitem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

const todos = [
  { text: "Tomar Curso de React", completed: false },
  { text: "Tomar Curso de Nextjs", completed: false },
  { text: "Tomar Curso de AWS", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <input placeholder="Cebolla" />
      <TodoList>
        {todos.map((e) => {
          return <Todoitem key={e.text} />;
        })}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
