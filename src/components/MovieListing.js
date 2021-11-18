import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movieSlice'
import MovieCard from './MovieCard';

function MovieListing() {
    const movies = useSelector(getAllMovies); 
    let renderMovies = ""; 

    renderMovies = movies.Response === "True" ? (
        movies.Search.length > 0 &&
            movies.Search.map(movie => (
               <MovieCard key={movie.imdbID} Title={movie.Title} Poster={movie.Poster}/> )
    )) : (
        <div>Loading. . . </div>
    )
    return (
        <div>
            <h2>Movies</h2>
            <div>
                {renderMovies}
            </div>
        </div>
            )
}

export default MovieListing
