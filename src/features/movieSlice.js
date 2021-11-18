import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies:{}
}

const movieSlice = createSlice({
    name: "movies", 
    initialState, 
    reducers: {
        addMovies: (state, {payload }) => {
            state.movies = payload; 
        }, 
    }, 
})

export const {addmovies} = movieSlice.actions; 

export default movieSlice.reducer 