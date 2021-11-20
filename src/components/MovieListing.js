import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../features/movieSlice'
import MovieCard from './MovieCard';
import styled from 'styled-components'
import Settings from '../features/Settings'


const Container = styled.div`
    width: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
`
const SectionHeader = styled.h1`
    padding: 2rem 1rem; 
`
const DisplayGrid = styled.div`
 
`

function MovieListing() {
   
    const movies = useSelector(getAllMovies); 
    const shows = useSelector(getAllShows); 
    let renderMovies = "";
    let renderShows = "";  

    renderMovies = movies.Response === "True" ? (
        movies.Search.length > 0 &&
            movies.Search.map(movie => (
               <MovieCard key={movie.imdbID} data={movie}/> )
    )) : (
        <div>Loading. . . </div>
    )

    renderShows = shows.Response === "True" ? (
        shows.Search.length > 0 &&
            shows.Search.map(show => (
               <MovieCard key={show.imdbID} data={show}/> )
    )) : (
        <div>Loading. . . </div>
    )


    return (
    <>
        <SectionHeader>
            Movies
        </SectionHeader>
        <DisplayGrid>
            <Slider {...Settings}>
            {renderMovies}
            </Slider>
        </DisplayGrid>
        <SectionHeader>
            Tv Shows
        </SectionHeader>
        <DisplayGrid>
            <Slider {...Settings}>
            {renderShows}
            </Slider>
        </DisplayGrid>
              
    </> 
            )
}

export default MovieListing
