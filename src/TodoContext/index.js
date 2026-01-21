import { createContext } from "react";

import { useState } from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext()

function TodoProvider({ children }) {
    const { item, saveItem, loading, error } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = item.filter(todo => !!todo.completed).length
    const totalTodos = item.length

    const todosFiltrados = searchValue
        ? item.filter(todo =>
            todo.text.toLowerCase().includes(searchValue.toLowerCase())
        )
        : item;

    const completeTodo = (text) => {
        const newTodos = [...item]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        )
        newTodos[todoIndex].completed = true
        saveItem(newTodos)
    }
    const deleteTodo = (text) => {
        const newTodos = [...item]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveItem(newTodos)
    }
    return (
        <TodoContext.Provider value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                todosFiltrados,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal
            }}>
            {children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider }