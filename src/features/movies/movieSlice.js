// Here we will create our slice (data slice from the API Pool)
import { createSlice } from "@reduxjs/toolkit";

//Set an initial state
const initialState = {
    //having noticed from the redux inspect tool on the browser that movies is returned as an objec, not an array, i make the change below
    //movies:[]
    movies:{}
}

//Create the Slice
const movieSlice = createSlice({
    //Name the slice
    name: "movies",
    //The initial state (short for initialState=initialState)
    initialState,
    //the reducers
    reducers: {
        //Now write the actions for the reducers
        //addMovies action will take the initial state, and the payload (which will be destructured)
        addMovies: (state=initialState, { payload }) => {
            //having gotten movies from payload, now update my state of the movies, i.e initial state + payload
            state.movies = payload;
        }
    }
});

//now export the addMovies action created soas to be available for import into components
export const { addMovies } = movieSlice.actions;

//Getting/Fetching a value from the Store
//getAllMovies will return the state.movies(name_of_our_slice).movies(the_property_we_want_to_fetch)
export const getAllMovies = (state) => state.movies.movies

//also export the movie slice reducer
export default movieSlice.reducer;