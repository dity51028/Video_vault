import React from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Main from '../components/Main'
const Container=styled.div`
    display:flex;
`
const Home = () => {
  return (
    <Container>
         <Menu />
         <Main/>
    </Container>
  )
}

export default Home