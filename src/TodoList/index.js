import "./todoList.css"
function TodoList (props){
    return (
        <div className="lista-tareas">
            <h2>Lista de tareas</h2>
            {props.children}
        </div>
    )
}
export { TodoList }