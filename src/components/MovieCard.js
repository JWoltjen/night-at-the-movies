import React from 'react'
import styled from 'styled-components'; 

const MovieContainer = styled.div`

`

const MovieTitle = styled.p`

`

const Image = styled.img`

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
