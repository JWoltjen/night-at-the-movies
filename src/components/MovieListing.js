import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movieSlice'
import MovieCard from './MovieCard';
import styled from 'styled-components'

const Container = styled.div`
    display: grid; 
    width: 95%; 
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: .5rem; 
`

function MovieListing() {
    const movies = useSelector(getAllMovies); 
    let renderMovies = ""; 

    renderMovies = movies.Response === "True" ? (
        movies.Search.length > 0 &&
            movies.Search.map(movie => (
               <MovieCard key={movie.imdbID} Title={movie.Title} Poster={movie.Poster} Year={movie.Year}/> )
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
