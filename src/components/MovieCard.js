import React from 'react'
import styled from 'styled-components'; 

const MovieContainer = styled.div`
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    background-color: #e9d8a6; 
    height: 500px; 
    width: 325px; 
    border: 2px solid black; 
    border-radius: 5px; 
    margin-bottom: 2rem; 
`

const MovieTitle = styled.p`
    
`

const Image = styled.img`
    object-fit: contain; 
    border: .25px solid gray; 
`

function MovieCard({imdbID, Title, Poster}) {
    return (
        <MovieContainer>
            <MovieTitle>{Title}</MovieTitle>
            <Image src={Poster} alt='the movie poster'/>
        </MovieContainer>
    )
}

export default MovieCard
