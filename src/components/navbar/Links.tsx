import styles from "./navbar.module.scss";

const Links = () => {
    return (
        <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#food">Food</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
        </div>
    );
};

export default Links;
