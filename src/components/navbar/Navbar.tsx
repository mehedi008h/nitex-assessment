import { Links, MenuBar, SocialLink } from "..";
import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>Nitex</h1>
            <Links />
            <SocialLink />
            <MenuBar />
        </div>
    );
};

export default Navbar;
