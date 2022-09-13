import React from 'react'
//To get all the movies from store, we'll need the useSelector & the getAllMovies function from movieSlice
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
//impor moviecard for movies display
import MovieCard from '../MovieCard/MovieCard';

const MovieListing = () => {
  //Getting all the movies from the store
  const movies = useSelector(getAllMovies);
  //console.log(movies); Now render the movies
  let renderMovies = "";
  //if movies.Response (Redux inspect element) is true return a JSX (loop through all the movies, and add to the movieCard: see the redux index element for how state tree is chronologically arranged[movies->Search->index]), else return error
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ): (<div className="movies-error"><h3>{movies.Error}</h3></div>)
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  )
}

export default MovieListing
