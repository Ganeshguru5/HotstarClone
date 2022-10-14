import React from 'react'
import '../styles/SingleMovie.css'
import {motion} from 'framer-motion'
export default function SingleMovie(props) {
  return (
    <div className='oneMovieDiv'>
        <img 
        whileHover={{scale:1.2}}
        src={props.url} className='oneMovie'/>
    </div>
  )
}
