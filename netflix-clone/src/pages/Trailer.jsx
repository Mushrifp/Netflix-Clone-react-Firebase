import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import endpoints from "../services/TmdbService";
import loading from "../assets/netflix_spinner.gif";

function Trailer() {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchTrailer = async () => {
      try {

        const dataFromApi = await axios.get(endpoints.trailer(id));
        const trailers = dataFromApi.data.results;
        const trailer = trailers.find((video) => video.type === "Trailer");

        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        } else {
          alert("Trailer not available");
        }

        const detailsResponse = await axios.get(endpoints.movieIdApi(id))
        setMovieDetails(detailsResponse.data);
      } catch (error) {
        console.error("Error fetching trailer or movie details:", error);
      }
    };

    fetchTrailer();
  }, []);

  return (
    <div className="p-16">
     
      <div className="mb-6">
        {trailerUrl ? (
          <iframe
            width="100%"
            height="500"
            src={trailerUrl}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="flex justify-center">
            <img src={loading} className="mt-56" alt="loading" />
          </div>
        )}
      </div>

      <div className="flex flex-col items-start">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">{movieDetails.title}</h2>
          <p className="text-lg mb-4">{movieDetails.overview}</p>
          <p className="text-md "> {movieDetails.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
