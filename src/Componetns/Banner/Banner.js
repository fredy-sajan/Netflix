import React, {useEffect, useState} from 'react'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'


function Banner() {
    const [movie, setMovie] = useState([])


    useEffect(()=>{
     
        axios.get(`/trending/all/week?api_key=${API_KEY}`).then(async (response)=> {

            const sleep = (time) => {
                return new Promise((resolve) => setTimeout(resolve, time))
            }

            for(let i=0;i<20;i++){
                await sleep(3000)
                setMovie(response.data.results[i])
                console.log(response.data.results)

                if(i === 19){
                    i = 0
                }
            }
        
        })
    }, [])
    
  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className="content">
            <div className="title">
                <h1 className='title-head'>{movie.title ? movie.title : movie.name}</h1>
            </div>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <div className="description">
                <h1 className="description-head">{movie ? movie.overview : ""}</h1>
            </div>
        </div>
        <div className="background-shade"></div>
    </div>
  )
}

export default Banner