import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
    return(
        <div className={styles.landingPage}>
            <Link to="/home">
                <button className={styles.button}>
                    <span id={styles.spanTop}></span>
                    <span id={styles.spanRight}></span>
                    <span id={styles.spanBottom}></span>
                    <span id={styles.spanLeft}></span>
                    HOME
                </button>
            </Link>
        </div>
    )
}

export default Landing;