import Image from 'next/image';
import React from 'react';

const Movie = () => {
  return (
    <section id="movieSection" className="movie__wrap section">
            <div className="movie__inner container">
                <div className="movie__text">
                    <h3>추천 영화</h3>
                    <p>농구를 주제로 한 다양한 영화를 추천드리고 있습니다.</p>
                    <a href="#" className="button-red">자세히 보기</a>
                </div>
                <div className="movie__item">
                    <div className="movie">
                        {/* <img src="/assets/images/movie/movie01.png" alt="영화1" /> */}
                        <Image
                          width={300}
                          height={400}
                          src="/assets/images/movie/movie01.png"
                          alt="영화1"
                        />
                    </div>
                    <div className="movie">
                        {/* <img src="images/movie02.png" alt="영화2" /> */}
                        <Image
                          width={300}
                          height={400}
                          src="/assets/images/movie/movie02.png"
                          alt="영화2"
                        />
                    </div>
                    <div className="movie">
                        {/* <img src="images/movie03.png" alt="영화3" /> */}
                        <Image
                          width={300}
                          height={400}
                          src="/assets/images/movie/movie03.png"
                          alt="영화3"
                        />
                    </div>
                    <div className="movie">
                        {/* <img src="images/movie04.png" alt="영화4" /> */}
                        <Image
                          width={300}
                          height={400}
                          src="/assets/images/movie/movie04.png"
                          alt="영화4"
                        />
                    </div>
                    <div className="movie">
                        {/* <img src="images/movie05.png" alt="영화5" /> */}
                        <Image
                          width={300}
                          height={400}
                          src="/assets/images/movie/movie05.png"
                          alt="영화5"
                        />
                    </div>
                    <div className="movie">
                        {/* <img src="images/movie06.png" alt="영화6" /> */}
                        <Image
                          width={300}
                          height={400}
                          src="/assets/images/movie/movie06.png"
                          alt="영화6"
                        />
                    </div>
                </div>   
            </div>
        </section>
  )
};

export default Movie;