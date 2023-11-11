import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useValue } from '../../context/AppProvider'

import "./Navbar.css"
const Navbar = () => {
 const sidebar = useRef()
 const [state, dispatch] = useValue()
 const [side, setSide] = useState(false)
 
  return (
    <div className='navbar'>
        <div className="logo">
            <Link to='/'>cryptofolio</Link>
        </div>
        <div className="transfer">
            <select>
                <option value="usd">USD</option>
                <option value="usd">USD</option>
                <option value="usd">USD</option>
            </select>
            <button onClick={() => setSide(true)} className='watch-list-btn'>watch list</button>
            <div ref={sidebar} className={`${side == true ? `sidebar-active` : "sidebar"}`}>
              <h1 className='sidebar-title'>WATCHLIST</h1>
              <div className="cards">
                {
                 state &&  state.liked.map(el => 
                   <div className="card">
                    <img src={el.image.large} alt="" />
                    <strong className='price'>{el.market_data.current_price.usd}$</strong>
                    <button className='remove-btn'>remove</button>
                   </div>
                 )
                }
              </div>
              <button className='close-btn'  onClick={() => setSide(false)}>close</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar