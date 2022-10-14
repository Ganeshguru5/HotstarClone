import React from 'react'
import movie1 from '../assets/movie1.jpg'
import '../styles/MovieBigSlide.css'
import {FaCaretRight} from 'react-icons/fa'
import {FiPlus} from 'react-icons/fi'
import {HiShare} from 'react-icons/hi'
import { IoMdPlay } from "react-icons/io";

export default function MovieBigSlide(props) {
  return (
    <div className='singleSlide'>
        <div className='content1'>
            <p className='title-big'>
            {props.title}
            </p>
            <p className='journer-big'>
                {props.language}.Drama.2019
            </p>
            <p className='description-big'>
            {props.description}
            </p>

            <div className='action-big'>
              <div className='watch-big'>
              <IoMdPlay color='#ccced0' fontSize={'30px'}/>
              <p style={{fontWeight:'bold',color:'#ccced0'}}>Watch Movie</p>
              </div>

              <div className='add-big' style={{marginLeft:250}}>
              <FiPlus color='#ccced0' fontSize={'30px'}/>
              <p style={{fontWeight:'bold',color:'#ccced0'}}>watchlist</p>
              </div>

              <div className='add-big'>
              <HiShare color='#ccced0' fontSize={'30px'}/>
              <p style={{fontWeight:'bold',color:'#ccced0'}}>Share</p>
              </div>
            </div>
        </div>
        <div className='content2'>
        <img src={props.url} style={{width:600,height:'100%'}} />
        
        </div>
    </div>
  )
}
