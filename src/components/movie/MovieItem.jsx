import Image from "next/image";
import React from "react";
import styles from "./movie.module.scss";

const MovieItem = ({ movie }) => {
    return (
        <li>
            <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
            >
                <Image
                    width={500}
                    height={500}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <span className={styles.title}>{movie.title}</span>
                <span className={styles.title}>{movie.name}</span>
                <span className={styles.star}>{movie.vote_average}</span>
            </a>
        </li>
    );
};

export default MovieItem;
