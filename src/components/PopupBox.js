import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import NotFound from "../images/Not_found.png"
import "./popup.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';
import { useDispatch, useSelector } from 'react-redux';
import {  addFavorite, removeFavorite } from '../features/favoriteMoviesSlice';
import { useLocation } from 'react-router-dom';
const PopupBox = ({setPopup, movieTitle, movieRating, movieTrailer, movieDescription,id, poster}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [isFavorited, setIsFavorited] = useState(false);
    const  {favorites}  = useSelector((state) => state.favoriteMovieSlice);
    useEffect(() => {
        setIsFavorited(favorites.some(favorite => favorite.id === id));
      }, [favorites, id]);
    const handleFavorite = (id) => {
        if (isFavorited) {
          dispatch(removeFavorite(id)); // dispatch removeFavorite action
          setIsFavorited(false);
          if(location.pathname === "/my-list"){
            setPopup(false);
          }
        } else {
            const newFavorite ={
                id : id , title : movieTitle, poster : poster, trailer : movieTrailer, rating : movieRating, description : movieDescription 
            }
          dispatch(addFavorite(newFavorite)); // dispatch addFavorite action
        }
      };
    const opts={
        width:'100%',
        height: '300px',
        playerVars : {
            autoplay:1,
        }
    }
  return (
    <div className='popup'>
        <div className='popup-header'>
            <button className='favorite-btn' onClick={() => handleFavorite(id)}>{isFavorited?  <GradeIcon />:<StarBorderIcon />}</button>
            <span onClick={() => setPopup(false)}>&times;</span>

        </div>
        <div className="trailer-player">
        {
            movieTrailer ? <YouTube opts={opts} videoId={movieTrailer} style={{marginTop:"50px"}}/> : <img src={NotFound} style={{width:"100%", height:"300px", marginTop:"50px"}}/>
        }
        
        <div className='popup-detail'>
            <h2 className='header'>{movieTitle}</h2>
            <span>{movieRating}/10</span>
        </div>
        <h3>Description : </h3>
        <p className='movie-description'>{movieDescription}</p>
        </div>  
    </div>
  )
}

export default PopupBox