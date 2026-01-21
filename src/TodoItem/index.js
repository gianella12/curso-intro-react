import "./todoItem.css"
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
function TodoItem(props) {
  return (
    <div className={`item ${props.completed ? "completado" : ""}`}>
      <FaCheckCircle
        className="check"
        onClick={props.onCompleted}
        size={18}
        color={props.completed ? "green" : "gray"}
      />
      <p>{props.text}</p>
      <FaTrash
      className="icono-basura"
        onClick={props.onDeleted}
        size={18}
      />
    </div>
  );


}
export { TodoItem }