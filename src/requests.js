const API_KEY = "3d27ca05766cce767d88c4348c23c034";

const requests = {
    fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTrendingMovies:`/trending/all/week?api_key=${API_KEY}&languge=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies : `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchScienceFiction : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchMystery : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchFantasy : `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchFamily : `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchMovieTrailerUrl : `https://api.themoviedb.org/3/movie/129/videos?api_key=${API_KEY}`,
}


export default requests;