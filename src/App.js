import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { CreateTodoBotton } from './createTodoBotton';
import React from 'react';

const defaultTodos = [
  {text:'cortar cebolla', completed:false},
  {text:'tomar el curso de react', completed:false},
  {text:'salir a caminar', completed:true},
  {text:'cocinar', completed:false},
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
       { defaultTodos.map( todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}/>
       ))}
      </TodoList>
      <CreateTodoBotton />
    </React.Fragment>

  );
}





export default App;
