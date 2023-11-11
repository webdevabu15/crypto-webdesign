import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import instance from "../../services/api/index"
import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useValue } from '../../context/AppProvider';

import "./Carousel.css"
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';

export default function App() {
     const [state, dispatch] = useValue()
    const [data, setData] = useState([])
    useEffect(() => {
        instance()
          .then(res => setData(res.data.splice(0,8)))
          .catch(error=>console.log(error))
    },[])
    const span = useRef(null);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={150}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
         state.liked != '' ? state.liked.map(el=>
          <SwiperSlide key={el.id}>
             <Link to={`/singleproduct/${el.id}`}>
              <img src={el.image.large} alt={el.name} />
              </Link>
             <h3>{el.name} &nbsp;<span className='percentage' style={{ color: el.market_data.price_change_percentage_24h < 0 ? 'red' : 'green' }}  ref={span}>{el.market_data.price_change_percentage_24h }%</span></h3>
             <strong>{el.market_data.current_price.usd}$</strong>
          </SwiperSlide>
          ):
        data.map(el =>
          <SwiperSlide key={el.id}>
             <Link to={`/singleproduct/${el.id}`}>
              <img src={el.image.large} alt={el.name} />
              </Link>
             <h3>{el.name} &nbsp;<span className='percentage' style={{ color: el.market_data.price_change_percentage_24h < 0 ? 'red' : 'green' }}  ref={span}>{el.market_data.price_change_percentage_24h }%</span></h3>
             <strong>{el.market_data.current_price.usd}$</strong>
          </SwiperSlide>
          )
          }
      
      </Swiper>
    </>
  );
}
