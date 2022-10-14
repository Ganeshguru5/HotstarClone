import React from 'react'
import dheeran from '../assets/movie1.jpg'
import '../styles/small.css'
import {motion} from 'framer-motion'
export default function Series(props) {
  return (
    <div >
        <motion.img
        whileHover={{width:300}}
        src={props.url} className='small-icon'/>
        <div style={{color:'white',margin:20,position:'relative',bottom:150}}>
        <h3>{props.title}</h3>
        <p>{props.description.slice(0,60)}</p>
        </div>
    </div>
  )
}