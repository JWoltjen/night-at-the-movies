import React, {useEffect} from 'react'
import {useParams} from 'react-router'; 
import styled from 'styled-components'; 
import {useDispatch, useSelector} from 'react-redux'; 
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../features/movieSlice';


function MovieDetail() {
    const {imdbID} = useParams(); 
    const dispatch = useDispatch(); 
    const data = useSelector(getSelectedMovieOrShow); 

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        console.log("yeeeey")
    }, [dispatch, imdbID])

    return (
        <div>
            <h1>Hey you guys</h1>
        </div>
    )
}

export default MovieDetail
