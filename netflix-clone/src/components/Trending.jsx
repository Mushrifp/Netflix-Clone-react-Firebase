import React, { useEffect, useState } from 'react';
import one from '../assets/numbers/one.png';
import two from '../assets/numbers/two.png';
import three from '../assets/numbers/three.png';
import four from '../assets/numbers/4.png';
import five from '../assets/numbers/five.png';
import six from '../assets/numbers/6.png';
import seven from '../assets/numbers/seven.png';
import eight from '../assets/numbers/eight.png';
import nine from '../assets/numbers/nine.png';
import ten from '../assets/numbers/10.png';
import axios from 'axios';
import endpoints from '../services/TmdbService';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TrendingCard from './TrendingCard';

function Trending() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(endpoints.trending).then((response) => {
      setMovie(response.data.results);
    });
  }, []);

  const scrollLeft = () => {
    const row = document.getElementById('title');
    if (row) row.scrollLeft -= 200; 
  };

  const scrollRight = () => {
    const row = document.getElementById('title');
    if (row) row.scrollLeft += 200; 
  };

  return (
    <>
      <p className="mb-5 mt-5 ml-6 text-xl font-semibold">Trending</p>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transform -translate-y-1/2"
          onClick={scrollLeft}
        >
          <FaChevronLeft size={24} />
        </button>

        <div
          id="title"
          className="flex overflow-x-auto gap-4 p-4 scrollbar-hide "
        >
          <TrendingCard numberImage={one} posterPath={`${endpoints.image}${movie[0]?.poster_path}`} />
          <TrendingCard numberImage={two} posterPath={`${endpoints.image}${movie[1]?.poster_path}`} />
          <TrendingCard numberImage={three} posterPath={`${endpoints.image}${movie[2]?.poster_path}`} />
          <TrendingCard numberImage={four} posterPath={`${endpoints.image}${movie[3]?.poster_path}`} />
          <TrendingCard numberImage={five} posterPath={`${endpoints.image}${movie[4]?.poster_path}`} />
          <TrendingCard numberImage={six} posterPath={`${endpoints.image}${movie[5]?.poster_path}`} />
          <TrendingCard numberImage={seven} posterPath={`${endpoints.image}${movie[6]?.poster_path}`} />
          <TrendingCard numberImage={eight} posterPath={`${endpoints.image}${movie[7]?.poster_path}`} />
          <TrendingCard numberImage={nine} posterPath={`${endpoints.image}${movie[8]?.poster_path}`} />
          <TrendingCard numberImage={ten} posterPath={`${endpoints.image}${movie[9]?.poster_path}`} />
        </div>

        <button
          className="absolute right-0 top-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transform -translate-y-1/2"
          onClick={scrollRight}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

export default Trending;
