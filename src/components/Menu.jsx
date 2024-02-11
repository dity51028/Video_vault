import React from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'
const Container=styled.div`
    flex:2;
    background-color:#181818;
    color:white;
    z-index:-1;
`
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:sticky;
    top:0;
`
const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <MenuItems/>
        </Wrapper>
    </Container>
  )
}
export default Menu