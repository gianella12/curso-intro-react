import "./todoCounter.css";
function TodoCounter({ total, completed }) {
    const todasCompletadas = total > 0 && completed === total;

    return (
        <>
            <h1>Mis tareas</h1>

            {todasCompletadas ? (
                <h2 id="tareas-completadas">
                    Felicitaciones, lograste completar tus tareas 🥳
                </h2>
            ) : (
                <h3>
                    Has completado {completed} de {total} TODOS
                </h3>
            )}
        </>
    );
}
export { TodoCounter }