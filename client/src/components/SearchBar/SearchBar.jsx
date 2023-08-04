import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const dispatch = useDispatch();
    
    const [searchName, setSearchName ] = useState("");

    const handleInput = (event) => { // funcion que setea el searchName, me lo setea a lo que sea el target value del input de busqueda
        event.preventDefault();//para que la pagina no se refresque, no se rerenderice
        setSearchName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(searchName))
    }

    return (
        <div className={styles.search}>
            <input placeholder="Search Pokemon..." type="search" onChange={handleInput}/>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;