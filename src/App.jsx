import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Nav from './component/Nav'
import Post from './component/Post'
import Reels from './component/Reels'
import Tags from './component/Tags'
import Profile from './component/Profile'

const App = () => {
  return (
    <BrowserRouter>

            <Nav></Nav>

            <Profile></Profile>

            <Routes>

                    <Route path='/' element={<Post/>}></Route>
                    <Route path='/reels' element={<Reels/>}></Route>
                    <Route path='/tags' element={<Tags/>}></Route>

            </Routes>

    </BrowserRouter>
  )
}

export default App