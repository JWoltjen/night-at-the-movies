import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movieSlice'
import MovieCard from './MovieCard';
import styled from 'styled-components'

const Container = styled.div`
    display: grid; 
    grid: 450px /auto auto auto; 
`


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
        <Container>
            {renderMovies}
        </Container>
              
       
            )
}

export default MovieListing
