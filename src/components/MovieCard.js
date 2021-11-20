import React from 'react'
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 


const MovieContainer = styled.div`
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    background-color: #e9d8a6; 
    height: 525px; 
    width: 325px; 
    border: 2px solid black; 
    border-radius: 5px; 
    padding-bottom: 1rem; 
    margin-bottom: 2rem; 
    object-fit: contain; 
    overflow: hidden; 
    transition: all 0.3s; 

    &:hover{
        transform: scale(1.025); 
        transition: all 0.3s; 
    }
`

const MovieTitle = styled.h2`
    padding-top: .25rem; 
    padding-bottom: .25rem; 
    color: #005f73;
`

const Image = styled.img`
    border: .25px solid gray; 
    
`

function MovieCard(props) {
    const {data} = props
    return (
        <Link to={`/movie/${data.imdbID}` }>
        <MovieContainer>
            <MovieTitle>{data.Title}</MovieTitle>
            <Image src={data.Poster} alt={data.Title}/>
        </MovieContainer>
        </Link>
    )
}

export default MovieCard
