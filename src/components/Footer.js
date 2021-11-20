import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: #001219; 
height: 5rem; 
width: 100%; 
padding: 0px 40px; 
display: flex; 
align-items: center; 
justify-content: center; 
flex-direction: column; 
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
            <Title>Created by Jeff Woltjen 2021</Title>
            <Description>Leveraging React-Router, Redux Toolkit and Styled Components</Description>
        </Container>
    )
}

export default Footer
