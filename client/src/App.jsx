import { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';


function App() {
  

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/restaurants/:id/update" element={<UpdatePage/>}/>
                <Route path="/restaurants/:id" element={<RestaurantDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
