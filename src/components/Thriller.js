import React from 'react'
import '../styles/small.css'
import {motion} from 'framer-motion'

export default function Thriller(props) {
  return (
    <div>
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
