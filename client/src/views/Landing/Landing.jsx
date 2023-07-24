import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
    return(
        <div className={styles.landingPage}>
            <Link to="/home">
                <button className={styles.button}>HOME</button>
            </Link>
        </div>
       
    )
}

export default Landing;