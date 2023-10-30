import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import styles from "./navbar.module.scss";

const SocialLink = () => {
    return (
        <div className={styles.social_links}>
            <li>
                <AiFillYoutube size={22} />
            </li>
            <li>
                <BiLogoFacebookCircle size={20} />
            </li>
            <li>
                <AiOutlineInstagram size={22} />
            </li>
        </div>
    );
};

export default SocialLink;
