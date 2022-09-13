import React from 'react'
//To get all the movies from store, we'll need the useSelector & the getAllMovies function from movieSlice
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'

const MovieListing = () => {
  //Getting all the movies from the store
  const movies = useSelector(getAllMovies);
  console.log(movies);
  return (
    <div>
      Movie Listing
    </div>
  )
}

export default MovieListing
