import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import { Container } from './utils/Utils'
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/single-product/SingleProduct"

import "./App.css"

const App = () => {
  return (
    <>
    <Container>
     <Navbar/> 
     </Container>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
    </Routes>
    </>
  )
}

export default App