import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Animated from './Animated'
import '../styles/Allmovies.css'
import Thriller from './Thriller'
import Series from './Series'
export default function Allmovies() {
  const [AnimatedMovies,setAnimatedMovies]=useState([]);
  const [ThrillerMovies,setThrillerMovies]=useState([]);
  const [SeriesMovies,setSeriesMovies]=useState([]);
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=16")
    .then(res=>res.json())
    .then(data=>setAnimatedMovies(data.results))
    //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=16
  })
    useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=27")
    .then(res=>res.json())
    .then(data=>setThrillerMovies(data.results))
    //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=16
  })
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576")
    .then(res=>res.json())
    .then(data=>setSeriesMovies(data.results))
    //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b02a8e9727484f1244028d52867cc576&with_genres=16
  })
  return (
    

    <div className='Full-div-small'>
      <div>
      <h1 style={{color:'white',fontSize:26}}>Animated movies</h1>
      <div className='AnimatedList'>
      {
        AnimatedMovies.map(movie=>(
          <Animated 
        url={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
        title={movie.original_title}
     description={movie.overview}
     language={movie.original_language}
        />
        ))
      }
      </div>
      </div>
      <div>
      <h1 style={{color:'white',fontSize:26}}>Horror movies</h1>
      <div className='AnimatedList'>
      {
        ThrillerMovies.map(movie=>(
          <Thriller 
          url={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
          title={movie.original_title}
     description={movie.overview}
     language={movie.original_language}
        />
        ))
      }
      </div>
      <h1 style={{color:'white',fontSize:26}}>Series</h1>
      <div className='AnimatedList'>
      {
        SeriesMovies.map(movie=>(
          <Series 
          url={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
          title={movie.name}
        description={movie.overview}
        language={movie.original_language}
        />
        ))
      }
      </div>
      </div>

    </div>
  )
}


