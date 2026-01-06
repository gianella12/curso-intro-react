import "./todoCounter.css";
function TodoCounter({ total, completed }) {
    return (
        <>
            <h1>Mis tareas</h1>
            <h3 >Has completa {completed} de {total} TODOS</h3>
        </>
    )
}
export { TodoCounter }