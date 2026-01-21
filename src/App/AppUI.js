import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoBotton } from '../CreateTodoBotton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import React, { useContext } from 'react';


function AppUI() {
    const {
        loading,
        error,
        todosFiltrados,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext)
    return (
        <React.Fragment >
            <div className="app">
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {loading && <TodosLoading />}
                    {error && <TodosError />}
                    {
                        (!loading && todosFiltrados.length === 0) &&
                        <EmptyTodos />
                    }
                    {todosFiltrados.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onCompleted={() => { completeTodo(todo.text) }}
                            onDeleted={() => { deleteTodo(todo.text) }}
                        />
                    ))
                    }
                </TodoList>
                <CreateTodoBotton />
                {openModal && (
                    <Modal>
                        funcionalidad de modal
                    </Modal>
                )}
            </div>
        </React.Fragment>

    );
}
export { AppUI };