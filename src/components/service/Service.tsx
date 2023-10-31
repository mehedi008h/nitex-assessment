import { FoodCard } from "..";
import styles from "./service.module.scss";

const Service = () => {
    return (
        <div id="food" className={styles.service}>
            <h3>Popular Menu</h3>
            <h1>
                Amazing Food Served <br /> With Delicacy
            </h1>
            <div className={styles.foods}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <FoodCard key={item} />
                ))}
            </div>
        </div>
    );
};

export default Service;
