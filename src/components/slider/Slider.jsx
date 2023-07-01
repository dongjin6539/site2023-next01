"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Slider = () => {
    return (
        <section id="sliderSection" className="slider__wrap gmarket5">
            <div className="slider__inner">
                <h2 className="blind">배너 슬라이드</h2>
                <div className="slider__img">
                    <Swiper
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Navigation, Pagination]}
                    >
                        <SwiperSlide>
                            <div className="slider s1 container">
                                <div className="text">
                                    <h3>
                                        New
                                        <br />
                                        portfolio
                                    </h3>
                                    <p>
                                        빛나는 재능은 노력의 결실입니다.
                                        <br />
                                        열심히 노력하고 사랑하는 일에는 늘
                                        성공의 길이 열립니다.
                                    </p>
                                    <a href="/" className="more button-blue">
                                        더 알아보기
                                    </a>
                                </div>
                                <div className="img" aria-label="hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon12.png"
                                        alt="이미지1"
                                    />
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon2.png"
                                        alt="이미지1"
                                    />
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon3.png"
                                        alt="이미지1"
                                    />
                                </div>
                                <div className="circle" aria-label="hidden">
                                    <span className="circle c1"></span>
                                    <span className="circle c2"></span>
                                    <span className="circle c3"></span>
                                    <span className="circle c4"></span>
                                    <span className="circle c5"></span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider s1 container">
                                <div className="text">
                                    <h3>
                                        New
                                        <br />
                                        portfolio
                                    </h3>
                                    <p>
                                        빛나는 재능은 노력의 결실입니다.
                                        <br />
                                        열심히 노력하고 사랑하는 일에는 늘
                                        성공의 길이 열립니다.
                                    </p>
                                    <a href="/" className="more button-blue">
                                        더 알아보기
                                    </a>
                                </div>
                                <div className="img" aria-label="hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon12.png"
                                        alt="이미지1"
                                    />
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon2.png"
                                        alt="이미지1"
                                    />
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon3.png"
                                        alt="이미지1"
                                    />
                                </div>
                                <div className="circle" aria-label="hidden">
                                    <span className="circle c1"></span>
                                    <span className="circle c2"></span>
                                    <span className="circle c3"></span>
                                    <span className="circle c4"></span>
                                    <span className="circle c5"></span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider s1 container">
                                <div className="text">
                                    <h3>
                                        New
                                        <br />
                                        portfolio
                                    </h3>
                                    <p>
                                        빛나는 재능은 노력의 결실입니다.
                                        <br />
                                        열심히 노력하고 사랑하는 일에는 늘
                                        성공의 길이 열립니다.
                                    </p>
                                    <a href="/" className="more button-blue">
                                        더 알아보기
                                    </a>
                                </div>
                                <div className="img" aria-label="hidden">
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon12.png"
                                        alt="이미지1"
                                    />
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon2.png"
                                        alt="이미지1"
                                    />
                                    <Image
                                        width={300}
                                        height={300}
                                        src="/assets/images/slider/sliderIcon3.png"
                                        alt="이미지1"
                                    />
                                </div>
                                <div className="circle" aria-label="hidden">
                                    <span className="circle c1"></span>
                                    <span className="circle c2"></span>
                                    <span className="circle c3"></span>
                                    <span className="circle c4"></span>
                                    <span className="circle c5"></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Slider;
