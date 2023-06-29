"use client";
import React, { useEffect, useState } from "react";
import MovieCont from "@/components/movie/MovieCont";
import ContTitle from "@/components/title/ContTitle";

const Movie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=d437b67f2b55e3f176bbe6232a79ad1b&language=ko-KR"
            );
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await res.json();

            setMovies(data.results);
        };
        getData();
    }, []);

    console.log(movies);

    return (
        <>
            <ContTitle title="movie" />
            <MovieCont movies={movies} />
        </>
    );
};

export default Movie;
