import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PopupBox from './PopupBox';
import ax from "../axios"
const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieTrailer, setMovieTrailer] = useState("");
  const [movieDetail, setMovieDetail] = useState("");
  const [popup, setPopup] = useState(false);
  const [id, setId] = useState(null);
  const [movies, setMovies] = useState([]);


  const handleClickOpen = async (movieId) => {
    if(!popup){
      setId(movieId);
      setPopup(true);
      const movie_key = movies[movieId].id;
      const movieVideoRequest = await axios.get(`https://api.themoviedb.org/3/movie/${movie_key}/videos?api_key=3d27ca05766cce767d88c4348c23c034`);
      const movieVideos = movieVideoRequest.data.results;
      if(movieVideos.length > 0){
          setMovieTrailer((movieVideos.filter(video => video.type === "Trailer"))[0].key);
      }  
      // fetch movie description
      setMovieDetail(movies[movieId].overview)
    }
    
  };

  const handlePopupClose = () => {
    setPopup(false);
    setId(null);
  };

  useEffect(() => {
    async function fetchData(req,res){
      const request = await ax.get(fetchUrl);
        setMovies(request.data.results);
        setIsLoading(false);
        return request;
      
      
    }
    fetchData();

    }
  , [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {isLoading ? (
          <p>Loading...</p>
        ) :  (
          movies.map((movie, index) => {
            return <>
                {
                    movie.poster_path ? <img
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.title}
                    className='poster'
                    key={movie.id}
                    onClick={() => handleClickOpen(index)}
                  /> : ""
                }
            </>
            
})
        )}
        {popup && (
          <PopupBox
            setPopup={handlePopupClose}
            movieTitle={
              movies[id].title ? movies[id].title : movies[id].name
            }
            movieTrailer={movieTrailer}
            movieRating={movies[id].vote_average}
            movieDescription={movieDetail}
            id = {movies[id].id}
            poster = {`${base_url}${movies[id].poster_path}`}
            
          />
        )}
      </div>
    </div>
  );
};

export default Row;