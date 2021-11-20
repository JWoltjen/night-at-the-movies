import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'; 
import user from '../images/user.png'

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

const InputContainer = styled.form`

`

const SearchInput = styled.input`
    type: text; 
    value={}; 
    placeholder: "Search Movies or Shows"
    onChange={handleChange}
`

function Header() {
    return (
            <Container>
                <Link to="/">
                <Logo>Night at the Movies</Logo>
                </Link>
                <InputContainer>
                    <SearchInput/>
                </InputContainer>
                <UserImage src={user}/>
            </Container>
    )
}

export default Header
