import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #001219; 
height: 5rem; 
width: 100%; 
padding: 0px 40px; 
display: flex; 
align-items: center; 
justify-content: space-between; 
position: fixed; 
bottom: 0px; 
`

const Title = styled.h1`
color: #e9d8a6; 
font-size: 20px; 
font-weight: 600; 
`

const Description = styled.p`
color: #e9d8a6; 
font-size: 20px; 
font-weight: 600; 

`


function Footer() {
    return (
        <Container>
            <Title>This is a footer</Title>
            <Description>Still just a footer</Description>
        </Container>
    )
}

export default Footer
