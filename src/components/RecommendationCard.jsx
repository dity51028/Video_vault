import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
justify-content:space-between;
align-items:top;
margin-bottom:12px;
`
const Wrapper=styled.div`
    width:350px;   
`
const Img=styled.img`
    width:100%;
    height:100px;
    background-color: #b8b894;
    border-radius:5px;
`
const Details=styled.div`
    margin-left:12px;
    gap:16px;
    width:100%;
    display:flex;
    align-items:start;
`
const Texts=styled.div`
`
const Heading=styled.h2`
  color:white;
  margin:0;
`
const ChannelName=styled.h4`
  color:#e0e0d1;
  margin:0;
`
const DateDetails=styled.h5`

  color:#e0e0d1;
`
const RecommendationCard = () => {
  return (
    <Container>
    <Wrapper>
        <Img>
        </Img>
        </Wrapper>
        <Details>
         
          <Texts>
            <Heading>This is the first heading</Heading>
            <ChannelName>New18Bangla</ChannelName>
            <DateDetails>435Views * 2 days ago</DateDetails>
          </Texts>
        </Details>
    
    </Container>
  )
}

export default RecommendationCard