"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import styles from "./unsplash.module.scss";

const UnsplashImg = ({ image }) => {
    const imgStyle = {
        width: "1200px", // 이미지의 너비를 300px로 설정합니다.
        height: "500px", // 이미지의 높이를 200px로 설정합니다.
        objectFit: "cover", // 이미지가 요소에 맞게 자동으로 조절되도록 합니다.
    };

    return (
        <a href={`http://unsplash.com/photos/${image.id}`} target="_blank">
            <Image
                width={500}
                height={500}
                src={image.urls.regular}
                alt={image.alt_description}
                style={imgStyle}
            />
        </a>
    );
};
const UnsplashSlider = ({ images }) => {
    return (
        <div className={styles.unsplash__slider}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                spaceBetween={30}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <UnsplashImg image={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default UnsplashSlider;
