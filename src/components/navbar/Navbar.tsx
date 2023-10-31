import { PiBowlFood } from "react-icons/pi";
import { Links, MenuBar, SocialLink } from "..";
import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <PiBowlFood size={35} color="maroon" />
                <h1>Nitex</h1>
            </div>
            <Links />
            <SocialLink />
            <MenuBar />
        </div>
    );
};

export default Navbar;
