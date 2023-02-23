import React, {useEffect, useState} from 'react';
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../Constants/Constants';
import './RowPost.css';
import Youtube from 'react-youtube';

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [youtubeUrlId, setYoutubeUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
  }, [])

  // Youtube video controls
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const youtubeTrailers = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results!==0){
        setYoutubeUrlId(response.data.results[0])
      }
    })
  }


  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movies.map((obj)=>

            <img onClick={()=>youtubeTrailers(obj.id)} className={props.isSmall ? 'smallPoster' :'posterImg'} src={`${imageUrl+obj.backdrop_path}`} alt="imges" />
          
          )}          
        </div>
        {youtubeUrlId && <Youtube opts={opts} videoId={youtubeUrlId.key} />}
    </div>
  )
}

export default RowPost