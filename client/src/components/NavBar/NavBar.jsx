import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav_links}>
                    <li><Link className={styles.link} to="/create">Create Pokemon</Link></li>
                    <li><Link className={styles.link} to="/">Landing</Link></li>
                </ul>
            </nav>
            <SearchBar/>
        </header>
    )
}

export default NavBar;
