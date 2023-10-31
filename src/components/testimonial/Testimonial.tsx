import styles from "./testimonial.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const Testimonial = () => {
    return (
        <div className={styles.testimonial}>
            <h3>TESTIMONIALS</h3>
            <h1>What our customers say</h1>
            <div>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className={`mySwiper ${styles.swiper}`}
                >
                    {[1, 2, 3, 4].map((quet) => (
                        <SwiperSlide key={quet} className={styles.swiper_slide}>
                            <p>
                                I started learning programming w/ Mosh 4 years
                                ago with his C# courses. Thanks to those I
                                landed my first job. Then, I continued to learn
                                from his materials and made the jump from junior
                                to senior Software Engineer (my salary went 10x
                                from my first job). Now, 4 years later I
                                continue to learn with his excellent courses.
                            </p>
                            <div>
                                <div className={styles.avatar}>M</div>
                                <h3>Mehedi Hasan</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
