import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import instance from '../../services/api'
import "./SingleProduct"
// import ApexChart  from './chart'

const SingleProduct = () => {

  const [data, setData] = useState([])
  const {pathname} = useLocation()
  console.log(pathname.split("/")[2]);
  useEffect(()=> {
    instance(`${pathname.split("/")[2]}`)
    .then(res => setData(res.data))
    .catch(error => console.log(error))
  },[pathname])
    console.log(data);
  return (
    <div>
      <div className="crypto-coin">
        {/* <img src={data.image.large} alt="" /> */}
         <h2>{data && data.name}</h2>
         {/* <p>{data.description.en}</p> */}
        <strong>{data.coingecko_rank}</strong>
        {/* <p>{data.market_data.current_price.usd}$</p> */}
      </div>
      <div>
        {/* <ApexChart/> */}
      </div>
    </div>
  )
} 

export default SingleProduct