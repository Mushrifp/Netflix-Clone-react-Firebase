import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints from '../services/TmdbService'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function MovieRow(props) {
  
     const {title,url} = props

     const [movie,setMovie] = useState([])

     useEffect(()=>{
           axios.get(url)
        .then((response)=>{
          setMovie(response.data.results)
        }).catch((err)=>{
               console.log(err)
        })
     },[])

  const scrollLeft = () => {
    const row = document.getElementById(title);
    row.scrollLeft -= 200; 
  };

  const scrollRight = () => {
    const row = document.getElementById(title);
    row.scrollLeft += 200;
  };

  return (
     

    <>
    <p className="mb-5 mt-5 ml-6 text-xl font-semibold">{title}</p>
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={24} />
      </button>
  

      <div
        id={title}
        className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide"
      >
        {movie.map((mve) => (
         <Link key={mve.id} to={`/trailer/${mve.id}`}>

               <div
           
            className="relative flex-shrink-0 w-64 h-auto rounded "  
          >
            <img
              src={`${endpoints.image}${mve.backdrop_path}`}
              alt={mve.title}
              className="w-full h-full object-cover rounded"
            />
            
            <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100  duration-300 p-2 text-white text-center">
              <p className="text-sm">{mve.title}</p>
            </div>
          </div>            
 


         </Link>
        ))}
      </div>
  
      <button
        className="absolute right-0 top-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        onClick={scrollRight}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  </>
  
  

  
  
  )
}

export default MovieRow