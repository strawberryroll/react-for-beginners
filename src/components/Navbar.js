import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>FILM</h2>
            <div className={styles.routesContainer}>
                <label>
                    <Link to="/" className={styles.link}>
                        Home
                    </Link>
                </label>
                <label>
                    <Link to="/about" className={styles.link}>
                        About
                    </Link>
                </label>
            </div>
        </div>
    );
}

export default Navbar;
