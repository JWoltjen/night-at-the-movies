import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../features/movieSlice'
import MovieCard from './MovieCard';
import styled from 'styled-components'


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
    display: grid; 
    width: 95%; 
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: .5rem; 
`

function MovieListing() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };
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
            <Slider {...settings}>
            {renderMovies}
            </Slider>
        </DisplayGrid>
        <SectionHeader>
            Tv Shows
        </SectionHeader>
        <DisplayGrid>
            <Slider {...settings}>
            {renderShows}
            </Slider>
        </DisplayGrid>
              
    </> 
            )
}

export default MovieListing
