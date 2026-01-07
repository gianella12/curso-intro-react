import "./todoItem.css"
import { FaCheckCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
function TodoItem(props) {
  return (
    <div className={`item ${props.completed ? "completado" : ""}`}>
      <FaCheckCircle
        className="check"

        size={18}
        color={props.completed ? "green" : "gray"}
        style={{ transition: "color 0.3s ease" }}
      />
      <p>{props.text}</p>
      <MdClose
        className="delete"
        size={18}
        color="red"
      />
    </div>
  );


}
export { TodoItem }