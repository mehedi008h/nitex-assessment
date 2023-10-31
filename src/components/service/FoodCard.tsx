import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import styles from "./service.module.scss";
import { banner_img } from "../../constants/images";

const FoodCard = () => {
    return (
        <div className={styles.foodCard}>
            {/* img  */}
            <div className={styles.image}>
                <img src={banner_img} alt="" />
            </div>
            {/* info  */}
            <div className={styles.info}>
                <h3>Dishim with Fries and Sause</h3>
                <p>
                    Lorem Ipsum Lorem Ipsum is simply and dummy text of the
                    printing.
                </p>
                <div>
                    <h4>$ 3.50</h4>
                    <div>
                        <div className={styles.favorite}>
                            <AiOutlineHeart />
                        </div>
                        <div className={styles.share}>
                            <AiOutlineShareAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
