import React from 'react'
import Carousel from "../../components/Carousel/Carousel"
import Table from "../../components/Table/Table"

import "./Home.css"

const Home = () => {
  return (
    <div>
       <div className="hero">
          <div className="container">
              <div className="hero-wrapper">
                  <h1 className='hero-title'>CRYPTOFOLIO WATCH LIST</h1>
                  <p className='hero-text'>Get all the Info regarding your favorite Crypto Currency</p>
                  <Carousel/>
              </div>          </div>
       </div>
       <div className="container">
         <Table/>
       </div>
    </div>
  )
}

export default Home