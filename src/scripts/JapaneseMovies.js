import React,{useState,useEffect} from 'react'
import '../styles/languageMovies.css'
import Animated from '../components/Animated';
import SingleMovie from '../components/SingleMovie';
export default function JapaneseMovies() {

 const [tamilMovies,setTamilMovies]=useState([]);
 fetch("https://api.themoviedb.org/3/discover/movie?api_key=b02a8e9727484f1244028d52867cc576&with_origin_country=JP&sort_by=vote_average.desc")
 .then(response=>response.json())
 .then(data=>setTamilMovies(data.results))
 
  return (
    <div >
        <h2 style={{color:'white'}}>TamilMovies</h2>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            {
                tamilMovies.map(movie=>(
                 movie.backdrop_path ? 
        <SingleMovie 
        url={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
        title={movie.original_title}
     description={movie.overview}
     language={movie.original_language}
        />: null
                  
                ))
            }
        </div>
    </div>
  )
}
