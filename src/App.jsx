import React from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
const Container=styled.div`
    margin:0;
`
const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Nav />
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/videos/:id' element={<Video/>}/>
              </Routes>
        </BrowserRouter>
    </Container>
  )
}
export default App