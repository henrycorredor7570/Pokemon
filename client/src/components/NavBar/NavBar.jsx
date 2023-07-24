import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="/home">Home</Link>
            <Link to="/create">Form</Link>
            <Link to="/">Landing</Link>
            <SearchBar/>
        </div>
    )
}

export default NavBar;