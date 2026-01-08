import "./todoSearch.css"
import { AiOutlineSearch } from "react-icons/ai";
function TodoSearch({ searchValue, setSearchValue }) {
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