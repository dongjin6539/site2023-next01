import Intro from "@/components/intro/Intro";
import Movie from "@/components/movie/Movie";
import Port from "@/components/port/Port";
import Slider from "@/components/slider/Slider";
import Unsplash from "@/components/unsplash/Unsplash";
import Youtube from "@/components/youtube/Youtube";
import React from "react";

const Home = () => {
    return (
        <>
            <Slider />
            <Intro />
            <Port />
            <Youtube />
            <Unsplash />
            <Movie />
        </>
    );
};

export default Home;
