import { FaPlus } from "react-icons/fa";
import "./createTodoBotton.css"
function CreateTodoBotton() {
    return (
        <button className="boton-flotante"
            onClick={(event) => {
                console.log("Click en el boton")
                console.log(event)
            }}
        >
            <FaPlus />
        </button>
    )
}
export { CreateTodoBotton }