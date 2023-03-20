import React from 'react'
import Row from '../components/Row';
import requests from '../requests';

const MainPage = () => {
  return (
    <>
        <Row title={"Top Rated Movies"} fetchUrl={requests.fetchTopRatedMovies} />
        <Row title={"Trending Movies"} fetchUrl={requests.fetchTrendingMovies} />
        <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Adventure Movies"} fetchUrl={requests.fetchAdventureMovies} />
        <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={"Documentaries Movies"} fetchUrl={requests.fetchDocumentaries} />
        <Row title={"Mystery Movies"} fetchUrl={requests.fetchMystery} />
        <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFamily} />
        <Row title={"Family Movies"} fetchUrl={requests.fetchFamily} />
    
    </>
  )
}

export default MainPage