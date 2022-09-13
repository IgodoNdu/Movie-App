import React, { useEffect } from 'react'
//Import MovieListing Component for use
import MovieListing from '../MovieListing/MovieListing';
//import base url & API Key fro OMDB movies
import movieApi from '../apis/movieApi';
import { APIKey } from '../apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  //fetch data and save to our redux store. Hence we'll need to make API Call
  //using the useEffect Hook to make API call (import useEffect)
  //create a var for the search term
  const movieSearchText = "Harry"
  //On receiving data from API, now dispatch an action (import the useDispatch), which will go to the reducer, which will update the state
  const dispatch = useDispatch();
  useEffect(() => {
    //create a function for the fetch movies (async func)

    const fetchMovies = async () => {
      //for the response (import the base url & API Key) include a search term with 's': see omdb endpoints
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieSearchText}&type=movie`).catch((err) => {
        console.log("Err :", err)
      });
      //console.log("API Response ", response);
      //Now dispatch an action: the 'addMovies' action (need to be imported) (will reach the reducer). Pass(response.data) considering 'data' is the key that's got all the results as was seen from the console log console.log("API Response ", response);
      dispatch(addMovies(response.data))
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
