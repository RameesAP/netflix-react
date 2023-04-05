import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie,setMovie]=useState([])
  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const Number =randomNumberInRange(response.data.results.length-1,0)
      console.log(response.data);
      setMovie(response.data.results[Number])
     }).catch((err)=>{
      console.log(err);
     })
  },[])
  function randomNumberInRange(max,min){
    return Math.floor(Math.random() *(max - min + 1))+min
  }
  return (
    <div  
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
     <div className='content'>
        <h1 className='tittle'>{movie? movie.title || movie.name : ''}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie? movie.overview: ""}</h1>
     </div>
     <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner