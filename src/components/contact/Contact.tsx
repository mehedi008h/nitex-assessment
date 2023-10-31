import { motion } from "framer-motion";
import { findus_img } from "../../constants/images";
import styles from "./contact.module.scss";
import { BiMapPin } from "react-icons/bi";

const Contact = () => {
    return (
        <div id="contact" className={styles.contact}>
            {/* gallery info  */}
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={styles.info}
            >
                <h3>Contact</h3>
                <h1>Find Us</h1>
                <p>
                    Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
                </p>
                <h3>Opening Hours</h3>
                <div>
                    <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
                    <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
                </div>
                <button className={styles.watch_btn}>
                    <BiMapPin />
                    Find Us
                </button>
            </motion.div>
            {/* gallery image slider  */}
            <div className={styles.image}>
                <img src={findus_img} width="100%" height="100%" alt="" />
            </div>
        </div>
    );
};

export default Contact;
