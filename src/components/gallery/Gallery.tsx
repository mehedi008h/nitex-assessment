import { BsInstagram } from "react-icons/bs";
import styles from "./gallery.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
    gallery_img_1,
    gallery_img_2,
    gallery_img_3,
    gallery_img_4,
} from "../../constants/images";
import { useEffect, useState } from "react";

const Gallery = () => {
    // state
    const [width, setWidth] = useState<number>();

    // get current window size
    const handleWidth = () => {
        const w = window.innerWidth;
        setWidth(w);
    };

    // call a function after specified time
    useEffect(() => {
        const interval = setInterval(() => {
            handleWidth();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div id="gallery" className={styles.gallery}>
            {/* gallery info  */}
            <div className={styles.info}>
                <h3>Instagram</h3>
                <h1>Photo Gallery</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facilis dolorem reiciendis corrupti necessitatibus
                    similique et dolore maxime nostrum, quisquam minus pariatur
                    culpa placeat explicabo
                </p>
                <button className={styles.watch_btn}>
                    <BsInstagram /> View More
                </button>
            </div>
            {/* gallery image slider  */}
            <div className={styles.image}>
                <Swiper
                    slidesPerView={(width as number) > 900 ? 2 : 1}
                    pagination={false}
                    navigation={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {[
                        gallery_img_1,
                        gallery_img_2,
                        gallery_img_3,
                        gallery_img_4,
                    ]?.map((image, i) => (
                        <SwiperSlide key={i}>
                            <div className="">
                                <div className={styles.slider_img}>
                                    <img
                                        height="100%"
                                        width="100%"
                                        src={image}
                                        alt=""
                                    />
                                    <BsInstagram className={styles.icon} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;
