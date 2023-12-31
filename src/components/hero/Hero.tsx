import { HiArrowSmRight } from "react-icons/hi";
import { RxVideo } from "react-icons/rx";
import { banner_img } from "../../constants/images";
import styles from "./hero.module.scss";
import { AiFillStar } from "react-icons/ai";
const Hero = () => {
    return (
        <main id="home" className={styles.hero}>
            <div className={styles.info}>
                <h3>Chase The New Flavor</h3>
                <h1>THE KEY TO</h1>
                <h1>FINE DINING</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatum explicabo odio quibusdam? Deleniti
                    laudantium eveniet, vel corporis a ipsam repellat maiores
                    sint molestiae error porro magnam hic non quod.
                </p>
                <div>
                    <button>
                        Order Now <HiArrowSmRight className="next_btn" />
                    </button>
                    <button className={styles.watch_btn}>
                        <RxVideo /> Watch Recipe Video
                    </button>
                </div>
            </div>
            <div className={styles.image}>
                <img src={banner_img} width="100%" height="100%" alt="" />

                <div className={styles.rating}>
                    <AiFillStar color="maroon" size={30} />
                    <span>4.2 (129)</span>
                </div>
            </div>
        </main>
    );
};

export default Hero;
