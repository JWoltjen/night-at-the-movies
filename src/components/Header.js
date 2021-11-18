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
font-size: 20px; 
font-weight: 600; 
`

const UserImage = styled.img`
height: 38px; 
width: 38px; 
`

function Header() {
    return (
            <Container>
                <Link to="/">
                <Logo>Movie App</Logo>
                </Link>
                <UserImage src={user}/>
            </Container>
    )
}

export default Header
