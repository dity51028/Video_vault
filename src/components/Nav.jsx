import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Container=styled.div`
    position:sticky;
    top:0;
    background-color:#181818;
    height:78px;
`
const Wrapper=styled.div`
    display:flex;
    align-items:center;
    height:100%;
    padding:0px 20px;
    justify-content:flex-end;
    position:relative;
`
const Search=styled.div`
position:absolute;
left:0;
right:0;
margin:auto;
color:white;
display:flex;
align-items:center;
justify-content:space-between;
width:40%;
padding:5px;
border:1px solid #cccccc;
border-radius:5px;
`
const Input=styled.input`
border:none;
outline:none;
color:white;
background:transparent;
flex:6;
`
const Button=styled.button`
    padding : 5px 15px;
    background-color:transparent;
    border:1px solid blue;
    border-radius:3px;
    font-weight:500;
    margin-top:10px;
    cursor:pointer;
    display:flex;
    align-items:center;
    gap:5px;
    color:white;
`
const Item=styled.div`
    position:absolute;
    left:15px;
    display:flex;
    gap:5px;
    align-items:center;
    color:blue;
`
const Title=styled.h1`
    color:white;
`
const Nav = () => {
  return (
    <Container>
        <Wrapper>
         <Item>
        <YouTubeIcon/>
        <Title>Reel Rift</Title>
        
        </Item>
            <Search>
                <Input placeholder='Search'/>
                <SearchOutlinedIcon/>
            </Search>
            <Button>
                <AccountCircleOutlinedIcon/>
                SIGN IN
            </Button>
        </Wrapper>
    </Container>
  )
}

export default Nav