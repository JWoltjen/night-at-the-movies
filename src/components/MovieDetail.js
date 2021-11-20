import React, {useEffect} from 'react'
import {useParams} from 'react-router'; 
import styled from 'styled-components'; 
import {useDispatch, useSelector} from 'react-redux'; 
import { fetchAsyncMovieOrShowDetail, 
         getSelectedMovieOrShow, 
        removeSelectedMovieOrShow } from '../features/movieSlice';

const MovieContainer = styled.div`
   display: flex; 
   flex-direction: row; 
   margin: 3rem; 
`
const SectionLeft = styled.div`
    margin-right: 2rem; 
`
const SectionRight = styled.div`
  
`
const MovieTitle = styled.h1`
    color: #e9d8a6;
    margin-bottom: 1rem; 
`
const MovieRating = styled.div`
    margin-bottom: 1rem; 
    padding-left: 3px;  
    span {
        margin-right: 20px; 
    }
`
const MovieVotes = styled.p`

`
const MoviePlot = styled.p` 
    margin-bottom: 1rem; 
    max-width: 900px; 

`
const MovieInfo = styled.p`
    div span: first-child {
    padding: 10px 0px; 
    font-weight: 600px; 
    width: 100px; 
    color: #e9d8a6;
    display: inline-block; 
    }

    div span {
    color: white; 
    }
`

const Image = styled.img`
    
`
function MovieDetail() {
    const {imdbID} = useParams(); 
    const dispatch = useDispatch(); 
    const data = useSelector(getSelectedMovieOrShow); 

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow()); 
        }
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
                   Runtime: {data.Runtime}
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
                        <span>Awards: </span>
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
