import React, {useEffect} from 'react'
import {useParams} from 'react-router'; 
import styled from 'styled-components'; 
import {useDispatch} from 'react-redux'; 


function MovieDetail() {
    const {imdDB} = useParams(); 
    const dispatch = useDispatch(); 
    useEffect(() => {

    }, [])
    return (
        <div>
            <h1>Hey you guys</h1>
        </div>
    )
}

export default MovieDetail
