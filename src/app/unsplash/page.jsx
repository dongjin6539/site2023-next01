"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import UnsplashCont from "@/components/unsplash/UnsplashCont";
import UnsplashSlider from "@/components/unsplash/UnsplashSlider";
import UnsplashSearch from "@/components/unsplash/UnsplashSearch";
import UnsplashTag from "@/components/unsplash/UnsplashTag";

const Movie = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://api.unsplash.com/photos?client_id=8KxfRej-WhG3bLJet9sMULT9u09loxyVYjMsOdZVKTg&per_page=30"
            );
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await res.json();

            setImages(data);
        };
        getData();
    }, []);

    console.log(images);

    const search = async (query) => {
        await fetch(
            `https://api.unsplash.com/search/photos?client_id=8KxfRej-WhG3bLJet9sMULT9u09loxyVYjMsOdZVKTg&per_page=30&query=${query}`
        )
            .then((response) => response.json())
            .then((result) => setImages(result.results))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <ContTitle title="unsplash" />
            <UnsplashSlider images={images} />
            <UnsplashSearch onSearch={search} />
            <UnsplashTag onSearch={search} />
            <UnsplashCont images={images} />
        </>
    );
};

export default Movie;
