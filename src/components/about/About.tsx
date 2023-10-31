import styles from "./about.module.scss";
import { about_img } from "../../constants/images";
import Item from "./Item";

const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.info}>
                <h3>About Us</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facilis dolorem reiciendis corrupti necessitatibus
                    similique et dolore maxime nostrum, quisquam minus pariatur
                    culpa placeat explicabo sapiente consequatur illo est
                    laborum? Aliquam blanditiis odio, natus maxime officia nam
                    provident? Eos, harum!
                </p>
                <div className={styles.items}>
                    <Item
                        count={23}
                        title="Recipe"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit, neque aut delectus"
                    />
                    <Item
                        count={24}
                        title="Outlet"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit, neque aut delectus"
                    />
                    <Item
                        count={3}
                        title="Chef"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit, neque aut delectus"
                    />
                </div>
            </div>
            <div className={styles.image}>
                <img src={about_img} width="100%" height="100%" alt="" />
            </div>
        </div>
    );
};

export default About;
