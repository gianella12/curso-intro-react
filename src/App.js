import { useState } from "react";
import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { CreateTodoBotton } from './createTodoBotton';
import React from 'react';

const defaultTodos = [
  { text: 'Crear mi primer TODO ', completed: true },
  { text: 'Aprender React ', completed: false },
  { text: 'Practicar mucho ', completed: true },
];
function App() {
  const [todos, setTodos] = useState(defaultTodos)

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const todosFiltrados = searchValue
  ? todos.filter(todo =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    )
  : todos;
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todosFiltrados.map(todo => (

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoBotton />
    </React.Fragment>

  );
}





export default App;
