import "./todoSearch.css"
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { AiOutlineSearch } from "react-icons/ai";
function TodoSearch() {
    const {searchValue, setSearchValue } = useContext(TodoContext)
    return (
        <div className="search-container">
            <AiOutlineSearch className="search-icon" size={24} />
            <input type="text"
                placeholder="Buscar..."
                value={searchValue}
                className="search-input"
                onChange={(event) => { setSearchValue(event.target.value) }} />
        </div>

    )
}
export { TodoSearch }