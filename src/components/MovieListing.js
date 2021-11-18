import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movieSlice'

function MovieListing() {
    const movies = useSelector(getAllMovies); 
    return (
        <div>
            
        </div>
    )
}

export default MovieListing
