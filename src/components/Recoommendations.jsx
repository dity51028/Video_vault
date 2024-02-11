import React from 'react'
import styled from 'styled-components'
import Card from './Card.jsx'
import RecommendationCard from './RecommendationCard.jsx'
const Container=styled.div`
    flex:4;
    padding-left:2rem;
`
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    margin:auto;
`
const Recommendations = () => {
  return (
    <Container>
       <Wrapper>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        
       </Wrapper>
    </Container>
  )
}

export default Recommendations