import React, { useEffect } from 'react'
//Import MovieListing Component for use
import MovieListing from '../MovieListing/MovieListing';
//import base url & API Key fro OMDB movies
import movieApi from '../apis/movieApi';
import { APIKey } from '../apis/MovieApiKey';

const Home = () => {
  //fetch data and save to our redux store. Hence we'll need to make API Call
  //using the useEffect Hook to make API call (import useEffect)
  useEffect(() => {
    //create a function for the fetch movies (async func)
    //create a var for the search term
    const movieSearchText = "Harry"
    const fetchMovies = async () => {
      //for the response (import the base url & API Key) include a search term with 's': see omdb endpoints
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieSearchText}&type=movie`).catch((err) => {
        console.log("Err :", err)
      });
      console.log("API Response ", response);
    };
    //Now call the function (fetchMovies) inside the useEffect (Here, i'll call once, therefore will add the empty dependency)
    fetchMovies();
  }, []);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home
