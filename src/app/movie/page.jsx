"use client";
import React, { useEffect, useState } from "react";
import MovieCont from "@/components/movie/MovieCont";
import MovieSearch from "@/components/movie/MovieSearch";
import ContTitle from "@/components/title/ContTitle";
import MovieTag from "@/components/movie/MovieTag";
import MovieSlider from "@/components/movie/MovieSlider";

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

    const search = async (query) => {
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=d437b67f2b55e3f176bbe6232a79ad1b&language=ko-KR&query=${query}`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    };

    const tags = async (query) => {
        await fetch(
            `${query}?api_key=d437b67f2b55e3f176bbe6232a79ad1b&language=ko-KR`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log(error));
    };

    return (
        <>
            <ContTitle title="movie" />
            <MovieSlider movies={movies} />
            <MovieSearch onSearch={search} />
            <MovieTag onSearch={tags} />
            <MovieCont movies={movies} />
        </>
    );
};

export default Movie;
