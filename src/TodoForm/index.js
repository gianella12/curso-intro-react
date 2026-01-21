import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm() {
    const { setOpenModal, addTodo } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button button--cancelar" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button button--submit">Agregar</button>
            </div>
        </form>
    )
}
export { TodoForm };