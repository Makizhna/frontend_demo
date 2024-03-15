import { Button } from '@mui/material';
import React,{useEffect,useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import {useNavigate,useParams} from 'react-router-dom';

export default function MovieDetail() {
    const { id } =useParams(); 

    const [movie,setMovie]=useState([]);

    useEffect(() => {
      fetch(`https://65f16cd1034bdbecc7627f7d.mockapi.io/movie/${id}`, {
          method: "GET"
      })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  
    //console.log(movie);
    const ratingStyles={
      color:movie.rating>=8.5?"green":"red"
    }
    const navigate=useNavigate()
  return (
    <div>
      <iframe width="695" height="391" src="https://www.youtube.com/embed/sOlwDmD6ux0" title="3 ingredients dessert Recipe! No oven! no gelatin! no cornstarch! Quick and Delicious !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='movie-detail-container'>
        <div className='movie-spec'>
          <h2 className="movie-name">{movie.name}</h2>
          <h3 style={ratingStyles} className='movie-rating'>
            ⭐{movie.rating}
          </h3>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
      </div>
      <Button variants="contained" startIcon={<ArrowBackIosIcon/>} onClick={()=>navigate(-1)}>
        Back
      </Button>
    </div>
  )
}