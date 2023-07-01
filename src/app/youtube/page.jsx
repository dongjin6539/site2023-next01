"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import YoutubeCont from "@/components/youtube/YoutubeCont";
import YoutubeSlider from "@/components/youtube/YoutubeSlider";
import YoutubeSearch from "@/components/youtube/YoutubeSearch";
import YoutubeTag from "@/components/youtube/YoutubeTag";

const Movie = () => {
    const [youtubes, setYoutubes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=농구&type=video&videoDuration=medium&key=AIzaSyCP7j_dh-rc1KAc4FUEHCGNU0MZhPsM_Rw"
            );
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await res.json();

            setYoutubes(data.items);
        };
        getData();
    }, []);

    console.log(youtubes);

    const search = async (query) => {
        await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${query}&type=video&videoDuration=medium&key=AIzaSyCP7j_dh-rc1KAc4FUEHCGNU0MZhPsM_Rw`
        )
            .then((response) => response.json())
            .then((result) => setYoutubes(result.items))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <ContTitle title="youtube" />
            <YoutubeSlider youtubes={youtubes} />
            <YoutubeSearch onSearch={search} />
            <YoutubeTag onSearch={search} />
            <YoutubeCont youtubes={youtubes} />
        </>
    );
};

export default Movie;
