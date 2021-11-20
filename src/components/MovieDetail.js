import React, {useEffect} from 'react'
import {useParams} from 'react-router'; 
import styled from 'styled-components'; 
import {useDispatch, useSelector} from 'react-redux'; 
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../features/movieSlice';

const MovieContainer = styled.div`
   display: flex; 
   flex-direction: row; 
   margin: 3rem; 
`
const SectionLeft = styled.div`
    
`
const SectionRight = styled.div`
  
`

const MovieTitle = styled.h2`
`

const MovieRating = styled.div`

`

const MovieVotes = styled.p`

`

const MoviePlot = styled.p` 


`
const MovieInfo = styled.p`

`

const Image = styled.img`
    
`
function MovieDetail() {
    const {imdbID} = useParams(); 
    const dispatch = useDispatch(); 
    const data = useSelector(getSelectedMovieOrShow); 

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        console.log("yeeeey")
    }, [dispatch, imdbID])

    return (
        <MovieContainer>
           <SectionLeft>
           <MovieTitle>{data.Title}</MovieTitle>   
           <MovieRating>
               <span>
                   IMDB Rating : {data.imdbVotes}
               </span>
               <span>
                   Runtime : {data.RunTime}
               </span>
               <span>
                   Year: {data.Year}
               </span>
           </MovieRating>
           <MoviePlot>
                   {data.Plot}
           </MoviePlot>
           <MovieInfo>
                   <div>
                        <span>Director: </span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars: </span>
                        <span>{data.Stars}</span>
                    </div>
                    <div>
                        <span>Actors: </span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Genre: </span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages: </span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Genre: </span>
                        <span>{data.Awards}</span>
                    </div>
               </MovieInfo>
           </SectionLeft>

           <SectionRight>
           <Image src={data.Poster}/>
           </SectionRight>
        </MovieContainer>
    )
}

export default MovieDetail
