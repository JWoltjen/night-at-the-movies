import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchAsyncMovies = createAsyncThunk(
        'movies/fetchAsyncMovies', async ()=> {
        const movieText = "jaws"
           
                const res = await fetch(`http://www.omdbapi.com/?apikey=6216491d&s=${movieText}&type=movie`)
                const data = await res.json(); 
                return data; 
    })


    export const fetchAsyncShows = createAsyncThunk(
        'movies/fetchAsyncShows', async ()=> {
        const showText = "cop"
           
                const res = await fetch(`http://www.omdbapi.com/?apikey=6216491d&s=${showText}&type=series`)
                const data = await res.json(); 
                return data; 
    })

    export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
        'movies/fetchAsyncMovieOrShowDetail', async (id)=> {
                const res = await fetch(`http://www.omdbapi.com/?apikey=6216491d&i=${id}&Plot=full`)
                const data = await res.json(); 
                return data; 
    })

const initialState = {
    movies:{}, 
    shows: {}, 
    selectedMovieOrShow: {}, 
}

const movieSlice = createSlice({
    name: "movies", 
    initialState, 
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}; 
        }
    }, 
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending fetch of movies")
        }, 
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully"); 
            return {...state, movies: payload}
        }, 
        [fetchAsyncShows.pending]: (state, {payload}) => {
            console.log("pending fetch of shows")
        }, 
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('fetched shows successfully'); 
            return {...state, shows: payload}
        }, 
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log('fetched shows successfully'); 
            return {...state, selectedMovieOrShow: payload}
        }
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions; 
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows; 
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow; 
export default movieSlice.reducer 