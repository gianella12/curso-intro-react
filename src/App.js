import { useState } from "react";
import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { CreateTodoBotton } from './createTodoBotton';
import React from 'react';
import './app.css';
// const defaultTodos = [
//   { text: 'Crear mi primer TODO ', completed: true },
//   { text: 'Aprender React ', completed: false },
//   { text: 'Practicar mucho ', completed: true },
// ];
// localStorage.setItem('TODOS_V1', defaultTodos);
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItems;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  }else {
    parsedItems = JSON.parse(localStorageItem);
  }
  const [item, setItem] = useState(parsedItems)
  
  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem);
  }
  return [ item, saveItem ];
}
function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const todosFiltrados = searchValue
    ? todos.filter(todo =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    )
    : todos;

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <React.Fragment >
      <div className="app">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {todosFiltrados.length > 0 ? (
            todosFiltrados.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => { completeTodo(todo.text) }}
                onDeleted={() => { deleteTodo(todo.text) }}
              />
            ))
          ) : (
            <p >
              No hay tareas que coincidan 🔍
            </p>
          )}
        </TodoList>
        <CreateTodoBotton />
      </div>
    </React.Fragment>

  );
}





export default App;
