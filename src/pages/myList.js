import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll } from '../features/favoriteMoviesSlice'
import PopupBox from '../components/PopupBox'
const MyList = () => {
    const  {favorites}  = useSelector((state) => state.favoriteMovieSlice);
    const dispatch = useDispatch();
    const [popup, setPopup] = useState(false);
    const [id, setId] = useState(null)
    const handleClickOpen = (movieId) => {
      if(!popup){
        setPopup(true);
        setId(movieId);
      }
        
      };
      const handlePopupClose = () => {
        setPopup(false);
        setId(null);
      };
      const handleClick = () => {
        dispatch(removeAll())
      }
  return (
    <div className='list'>
      <div className='header'>
        <h2>My Favorite List Of Movies : </h2>
        <button className='btn-clear' onClick={() => handleClick()}>clear all</button>
      </div>
        
        <div className='searchPage'>
        {favorites.length > 0 ?
        (favorites.map((favorite, index) => {
            return <img
            src={favorite.poster}
            alt={favorite.title}
            className='poster'
            key={favorite.id}
            onClick={() => handleClickOpen(index)}
          /> 
        }) ) : <p>you have no favorites movies</p> 
        
    }
        </div>
        
    {popup && favorites[id] && <PopupBox setPopup={handlePopupClose} movieTitle={favorites[id].title} movieTrailer={favorites[id].trailer} movieRating={favorites[id].rating} movieDescription={favorites[id].description} id = {favorites[id].id}
            poster = {favorites[id].poster}/>}
    </div>
  )
}

export default MyList