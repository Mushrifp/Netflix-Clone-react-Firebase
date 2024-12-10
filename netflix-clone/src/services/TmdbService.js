const key = import.meta.env.VITE_API_KEY 
const baseUrl = "https://api.themoviedb.org/3"

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
    trending:`${baseUrl}/trending/movie/day?api_key=${key}`,
    horror:`${baseUrl}/discover/movie?api_key=${key}&with_genres=27`,
    war:`${baseUrl}/discover/movie?api_key=${key}&with_genres=10752`,
    documentary:`${baseUrl}/discover/movie?api_key=${key}&with_genres=99`,
    animation:`${baseUrl}/discover/movie?api_key=${key}&with_genres=16`,
    western:`${baseUrl}/discover/movie?api_key=${key}&with_genres=37`,
    image:`https://image.tmdb.org/t/p/original`,
    trailer:(id) => `${baseUrl}/movie/${id}/videos?api_key=${key}`,
    movieIdApi:(id) => `${baseUrl}/movie/${id}?api_key=${key}`
};



export default endpoints;