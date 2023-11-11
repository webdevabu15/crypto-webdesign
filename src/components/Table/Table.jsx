import React, { useEffect, useState } from 'react'
import instance from '../../services/api'
import{AiOutlineArrowLeft,AiOutlineArrowRight, AiFillEye} from "react-icons/ai"
import {useValue} from "../../context/AppProvider"

import "./Table.css"
import { Link } from 'react-router-dom'

const Table = () => {
    const [currenntPage, setCurrentPage] = useState(1)
    const [product, setProduct] = useState([])

    useEffect(() => {
        // markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h
        instance()
          .then(res => setProduct(res.data))
          .catch(error=>console.log(error))
    },[])

    const recordsPerPage = 10
    const lastIndex = currenntPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = product.slice(firstIndex, lastIndex)
    const npage = Math.ceil(product.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
 
    function prePage() {
        if(currenntPage !== firstIndex){
            setCurrentPage(currenntPage - 1)
        }
    }
    function changeCpage(id) {
        setCurrentPage(id)
    }
    function nextPage() {
       if (currenntPage !== lastIndex) {
        setCurrentPage(currenntPage + 1)
       }   
    }

    const [search, setSearch] = useState('')

    const [state,dispatch] = useValue()

    const likeProduct = (card) => {
        let arr = []
         arr.push(card)
         console.log(arr);
        dispatch ({type:"ADD_TO_LIKE", card})
      }
    const disLike = (id) => {
        dispatch({type:"DISLIKE_PRODUCT", id})
      }
    
      
  return (
    <div className='Market'>
        <div className="crypto-market">
            <h2 className="market-title">Cryptocurrency Prices by Market Cap</h2>
            <input onChange={(e) => setSearch(e.target.value)} className='search-crypto' type="text" placeholder='Search For a Crypto Currency..'/>
            <table>
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    records.filter((item) => {
                        return search.toLowerCase  === '' ? item : item.id.toLowerCase().includes(search) ||  item.symbol.toLowerCase().includes(search)
                    }).map((card,i)=> 
                      
                        <tr key={card.id}>
                             <Link  to={`/singleproduct/${card.id}`}>
                                <td className='crypto'>
                                    <img className='market-img' src={card.image.large} alt="" />
                                    <div>
                                        <p>{card.symbol.toUpperCase()}</p> 
                                        <p>{card.id}</p>
                                    </div>
                                </td>
                            </Link>
                        <td>{card.market_data.price_change_24h}$</td>
                        <td>{
                            state.liked.findIndex((k,i) => k.id === card.id) !== -1 ? <AiFillEye onClick={() => disLike(card.id)} color={'green'}/> : <AiFillEye onClick={() => likeProduct(card)}/>
                            } <span style={{ color: card.market_data.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{card.market_data.price_change_percentage_24h}</span></td>
                        <td>{card.market_data.current_price.usd}$</td>
                        </tr>)
                   }
                </tbody>

            </table>
            <nav>
                <ul className='pagination'>
                  <li className="page-item">
                    <a to="#" className="page-link" onClick={prePage}><AiOutlineArrowLeft/></a>
                  </li>
                   {
                      numbers.map((n,i) => (
                        <li className='page-item' key={i}>
                            <Link to="/" className={`page-link ${currenntPage === n ? `active` : ""}`} onClick={() => changeCpage(n)}>{n}</Link>
                        </li>
                      ))
                   }
                   <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}><AiOutlineArrowRight/></a>
                  </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Table