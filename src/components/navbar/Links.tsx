import styles from "./navbar.module.scss";

const Links = () => {
    return (
        <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">About</a>
        </div>
    );
};

export default Links;
