import React, {useEffect} from 'react'
import styled from 'styled-components'
import MovieListing from './MovieListing'
import { useDispatch } from 'react-redux'
import {addMovies} from '../features/movieSlice'
const Banner = styled.img`

`

const Container = styled.div`
    width: 100%; 
    
`



function Home() {
    const dispatch = useDispatch() 

    const fetchMovies = async () => {
        try {
            const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=6216491d`)
            const data = await res.json(); 
            dispatch(addMovies(data))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
       
    }
    useEffect(() => {
        fetchMovies(); 
    }, [])
    return (
        <Container>
            <Banner/>
            <MovieListing/>
        </Container>
    )
}

export default Home
