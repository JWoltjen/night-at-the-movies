import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'; 
import user from '../images/user.png'
import { useDispatch } from 'react-redux';
import {
    fetchAsyncMovies, 
    fetchAsyncShows
} from "../features/movieSlice"

const Container = styled.div`
background-color: #001219; 
height: 5rem; 
padding: 0px 40px; 
display: flex; 
align-items: center; 
justify-content: space-between; 
`

const Logo = styled.p`
color: #e9d8a6; 
font-size: 45px; 
font-weight: 600; 
@media screen and (max-width: 600px) {
    font-size: 20px; 
}
`

const UserImage = styled.img`
height: 48px; 
width: 48px; 
@media screen and (max-width: 600px) {
    height: 24px; 
    width: 24px;  
}
`

const InputForm = styled.form`
    margin: .5rem;
    padding: .5rem; 
`

const SearchInput = styled.input` 
    
`

const SearchButton = styled.button`
    height: 1.0rem; 
    width: 3rem; 
`

function Header() {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch(); 
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(term)) 
        dispatch(fetchAsyncShows(term))
        setTerm('');
    }

    return (
            <Container>
                <Link to="/">
                <Logo>Night at the Movies</Logo>
                </Link>
                <InputForm onSubmit={submitHandler}>
                    <SearchInput 
                        type="text" 
                        value={term}
                        placeholder="Search movie or show"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <SearchButton 
                        type="submit"
                    />
                </InputForm>
                <UserImage src={user} alt="user profile image"/>
            </Container>
    )
}

export default Header
