import React,{useState,useEffect} from 'react'
import MovieBigSlide from '../components/MovieBigSlide'
import HorizontalScroll from 'react-scroll-horizontal'
import '../styles/HomeScreen.css'
import Allmovies from '../components/Allmovies'

export default function HomeScreen() {
  const [popularMovies,setPopularMovies]=useState([])
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576")
    .then(res=>res.json())
    .then(data=>setPopularMovies(data.results))
    //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=16
  })
  return (
    <div>
      <div className='home-scroll'>
     {
      popularMovies.map(movie=>(
        
     <MovieBigSlide 
     title={movie.original_title}
     description={movie.overview}
     language={movie.original_language}
     url={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
     
     />
     
      ))
     }
     </div>
    <div>
    <Allmovies />
    </div>
    </div>
  )
}
