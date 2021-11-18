import React from 'react'
import styled from 'styled-components'; 

const Container = styled.div`

`

const MovieTitle = styled.p`

`

const Image = styled.img`

`

function MovieCard({imdbID, Title, Poster}) {
    return (
        <Container>
            <MovieTitle>{Title}</MovieTitle>
            <Image src={Poster} alt='the movie poster'/>
        </Container>
    )
}

export default MovieCard
