import styles from "./navbar.module.scss";

const Links = () => {
    return (
        <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#">Service</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
        </div>
    );
};

export default Links;
