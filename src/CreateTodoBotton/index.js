import { FaPlus } from "react-icons/fa";
import "./createTodoBotton.css"
 import { useContext } from "react";
 import { TodoContext } from "../TodoContext";
function CreateTodoBotton() {
     const {setOpenModal} = useContext(TodoContext)
    return (
        <button className="boton-flotante"
             onClick={() => {setOpenModal(prevState => !prevState)}}
        >
            <FaPlus />
        </button>
    )
}
export { CreateTodoBotton }