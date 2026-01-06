import "./todoItem.css"
function TodoItem(props) {
  return (
    // <li>
    //   <span>V</span>
    //   <p>{props.text}</p>
    //   <span>X</span>
    // </li>
    <div className={`item ${props.completed ? "completado" : ""}`}>

      <span className="check">✔</span>
      <p>{props.text}</p>
      <span className="delete">✖</span>
    </div>
  );


}
export { TodoItem }