import "./todoSearch.css"
import { AiOutlineSearch } from "react-icons/ai";
function TodoSearch() {
    return (
        <div className="search-container">
            <AiOutlineSearch className="search-icon" size={24} />
            <input type="text" placeholder="Buscar..." className="search-input" />
        </div>

    )
}
export { TodoSearch }