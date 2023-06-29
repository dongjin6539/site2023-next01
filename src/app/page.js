import Intro from '@/components/intro/Intro';
import Member from '@/components/member/Member';
import Movie from '@/components/movie/Movie';
import Port from '@/components/port/Port';
import Slider from '@/components/slider/Slider';
import Unsplash from '@/components/unsplash/Unsplash';
import Youtube from '@/components/youtube/Youtube';
import React from 'react';

const Home = () => {
  return (
    <>
      <Slider />
      <Intro />
      <Member />
      <Port />
      <Youtube />
      <Unsplash />
      <Movie />
    </>
  )
};

export default Home;