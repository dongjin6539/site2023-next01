"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import YoutubeCont from "@/components/youtube/YoutubeCont";

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

    return (
        <>
            <ContTitle title="youtube" />
            <YoutubeCont youtubes={youtubes} />
        </>
    );
};

export default Movie;
