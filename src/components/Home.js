import React from 'react'
import styled from 'styled-components'
import MovieListing from './MovieListing'

const Banner = styled.img`

`

const Container = styled.div`
    width: 100%; 
    
`

function Home() {
    return (
        <Container>
            <Banner/>
            <MovieListing/>
        </Container>
    )
}

export default Home
