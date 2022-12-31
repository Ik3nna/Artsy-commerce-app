import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import styles from "./hero.module.css";

function Hero () {
    return(
        <section className={styles.content}>
            <h1>
                Photography is poetry & beautiful untold stories
            </h1>

            <p>
                Flip through more than 10,000 vintage shots, old photograghs, 
                historic images and captures seamlessly in one place. 
                Register to get top access.
            </p>

            <Swiper slidesPerView={"auto"} freeMode={true} spaceBetween={10} modules={[FreeMode]} className={styles.mySwiper}>
                <SwiperSlide className={styles.one}>
                    <img src="/assets/Rectangle 230.svg" alt="one" />
                </SwiperSlide>

                <SwiperSlide className={styles.two}>
                    <img src="/assets/Rectangle 231.svg" alt="two" />
                </SwiperSlide>

                <SwiperSlide className={styles.three}>
                    <img src="/assets/Rectangle 232.svg" alt="three" />
                </SwiperSlide>
                
                <SwiperSlide className={styles.four}>
                    <img src="/assets/Rectangle 233.svg" alt="four" />
                </SwiperSlide>

                <SwiperSlide className={styles.five}>
                    <img src="/assets/Rectangle 234.svg" alt="five" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Hero;