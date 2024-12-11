import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints from '../services/TmdbService'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Hero() {

    const [movie,setMovie] = useState({})

    useEffect(()=>{

      axios.get(endpoints.popular)
      .then((response)=>{
        const randomIndex = Math.floor(Math.random() * response.data.results.length)
        setMovie(response.data.results[randomIndex])
      }).catch((err) => console.log(err))
    },[])


  return (
    <div className="relative w-full h-[650px] bg-black">
        
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        
    <img 
      className="object-cover w-full h-full" 
      src={`${endpoints.image}${movie.backdrop_path}`} 
      alt={movie.title} 
    />
 
    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white">
      <div className="max-w-lg">
        
      <Link to={`/trailer/${movie.id}`} >
       <button className="flex mb-4 items-center space-x-1 bg-transparent text-white border border-white py-4 px-4 rounded hover:bg-slate-200 hover:text-black">
        <FaPlay size={30}/>
        <span>Watch Trailer</span>
       </button>
      </Link>

        <h1 className="text-3xl sm:text-4xl font-bold">{movie.title}</h1>
        <p className="text-sm sm:text-base mt-2">{movie.overview}</p>
        <p className="mt-4 text-xs sm:text-sm">Release Date: {movie.release_date}</p>

      </div>

    </div>
  </div>
  
  )
}

export default Hero