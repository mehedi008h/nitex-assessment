import { PiBowlFood } from "react-icons/pi";
import styles from "./footer.module.scss";
import { SocialLinks } from "..";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_links}>
                {/* Contact Us  */}
                <div className={styles.links_contact}>
                    <h1>Contact Us</h1>
                    <p>9 W 53rd St, New York, NY 10019, USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-555-1230</p>
                </div>

                {/* company logo  */}
                <div className={styles.links_logo}>
                    <PiBowlFood size={60} color="maroon" />
                    <p>
                        &quot;The best way to find yourself is to lose yourself
                        in the service of others.&quot;
                    </p>

                    {/* social link  */}
                    <div>
                        <SocialLinks />
                    </div>
                </div>

                {/* Working Hours  */}
                <div className={styles.links_work}>
                    <h1>Working Hours</h1>
                    <p>Monday-Friday:</p>
                    <p>08:00 am - 12:00 am</p>
                    <p>Saturday-Sunday:</p>
                    <p>07:00 am - 11:00 pm</p>
                </div>
            </div>

            {/* copyright  */}
            <div className={styles.copyright}>
                <p>2023 Nitex. All Rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
