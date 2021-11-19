import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchAsyncMovies = createAsyncThunk(
        'movies/  fetchAsyncMovies', async ()=> {
        const movieText = "jaws"
           
                const res = await fetch(`http://www.omdbapi.com/?apikey=6216491d&s=${movieText}&type=movie`)
                const data = await res.json(); 
                return data; 
    })

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
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        }, 
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully"); 
            return {...state, movies: payload}
        }
    }
})

export const {addMovies} = movieSlice.actions; 
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer 