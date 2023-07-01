"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import styles from "./youtube.module.scss";

const YoutubeImg = ({ youtube }) => {
    return (
        <a
            href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}
            target="_blank"
        >
            <Image
                width={500}
                height={500}
                src={youtube.snippet.thumbnails.medium.url}
                alt={youtube.snippet.title}
                style={{ width: "1200px" }}
            />
        </a>
    );
};
const YoutubeSlider = ({ youtubes }) => {
    return (
        <div className={styles.youtube__slider}>
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
                {youtubes.map((youtube, index) => (
                    <SwiperSlide key={index}>
                        <YoutubeImg youtube={youtube} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default YoutubeSlider;
