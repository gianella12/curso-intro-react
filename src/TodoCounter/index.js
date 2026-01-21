import { useContext } from "react";
import "./todoCounter.css";
import { TodoContext } from "../TodoContext";
function TodoCounter() {
    const {totalTodos, completedTodos } = useContext(TodoContext)
    const todasCompletadas = totalTodos > 0 && completedTodos === totalTodos;

    return (
        <>
            <h1>Mis tareas</h1>

            {todasCompletadas ? (
                <h2 id="tareas-completadas">
                    Felicitaciones, lograste completar tus tareas 🥳
                </h2>
            ) : (
                <h3>
                    Has completado {completedTodos} de {totalTodos} TODOS
                </h3>
            )}
        </>
    );
}
export { TodoCounter }