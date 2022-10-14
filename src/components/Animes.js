import React,{useEffect,useState} from 'react'

export default function Animes() {

  const [topAnime,setTopAnime]=useState([]);
  useEffect(()=>{
    fetch('https://api.jikan.moe/v4/top/anime')
    .then(res=>{res.json();console.log(res.json())})
    .then(data=>setTopAnime())
  })
  return (
    <div>Animes</div>
  )
}
