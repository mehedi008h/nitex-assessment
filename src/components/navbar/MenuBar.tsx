import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "./navbar.module.scss";

const MenuBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={styles.app_navbar_menu}>
            <HiMenuAlt3 onClick={() => setToggle(true)} color="white" />

            {toggle && (
                <motion.div
                    whileInView={{ y: [300, 0] }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                >
                    <IoIosArrowDown
                        color="white"
                        size={60}
                        onClick={() => setToggle(false)}
                    />
                    <ul>
                        {["home", "about", "work", "skills", "contact"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        onClick={() => setToggle(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default MenuBar;
