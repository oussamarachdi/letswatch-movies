import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../features/searchMovieSlice';
import PopupBox from '../components/PopupBox';

const base_url = 'https://image.tmdb.org/t/p/original/';

const SearchPage = ({ text }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.searchMovie.movies);
  const [movieTrailer, setMovieTrailer] = useState("");
  const [movieDetail, setMovieDetail] = useState("");
  const [popup, setPopup] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies(text));
    console.log(movies)
  }, [dispatch, text]);

  const handleClickOpen = async (movieId) => {
    if(!popup){
      setId(movieId);
      setPopup(true);
      const movie_key = movies[movieId].id;
      const movieVideoRequest = await axios.get(`https://api.themoviedb.org/3/movie/${movie_key}/videos?api_key=3d27ca05766cce767d88c4348c23c034`);
      const movieVideos = movieVideoRequest.data.results;
      
      if(movieVideos.length > 0){
          setMovieTrailer((movieVideos.filter(video => video.type == "Trailer"))[0].key);
      }  
      // fetch movie description
      setMovieDetail(movies[movieId].overview)
    }
    

  };

  const handlePopupClose = () => {
    setPopup(false);
    setId(null);
  };
  return (
    <div className='searchPage'>
      {movies.length === 0 && <h3>Movies Not Found</h3>}
      {
        movies.map((movie, index) =>{
          return <>
          {
              movie.poster_path ?  <img src={`${base_url}${movie.poster_path}`} alt={movie.title} className="poster" key={movie.id} onClick={() => handleClickOpen(index)}/> : <p>{movie.title}</p>
            }
          </>
          
      }) 
      }
       {popup && <PopupBox setPopup={handlePopupClose} movieTitle={movies[id].title ? movies[id].title : movies[id].name} movieTrailer={movieTrailer} movieRating={movies[id].vote_average} movieDescription={movieDetail} id = {movies[id].id}
            poster = {`${base_url}${movies[id].poster_path}`}/>}
    </div>
  )
}

export default SearchPage