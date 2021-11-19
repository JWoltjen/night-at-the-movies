import React, {useEffect} from 'react'
import styled from 'styled-components'
import MovieListing from './MovieListing'
import { useDispatch } from 'react-redux'
import {
    fetchAsyncMovies, 
    fetchAsyncShows
} from '../features/movieSlice'



const Banner = styled.img`

`

const Container = styled.div`
    width: 100%; 
    margin-left: 1rem; 
    margin-right: 1rem; 
    margin-bottom: 2rem; 
    padding-bottom: 2rem; 
`

function Home() {
    const dispatch = useDispatch() 
    
       
    useEffect(() => {
       dispatch(fetchAsyncMovies()); 
       dispatch(fetchAsyncShows())
    }, [dispatch])

    return (
        <Container>
            <Banner/>
            <MovieListing/>
        </Container>
    )
}

export default Home
