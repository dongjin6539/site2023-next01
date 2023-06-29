"use client";
import React, { useEffect, useState } from "react";
import ContTitle from "@/components/title/ContTitle";
import UnsplashCont from "@/components/unsplash/UnsplashCont";

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

    return (
        <>
            <ContTitle title="unsplash" />
            <UnsplashCont images={images} />
        </>
    );
};

export default Movie;
