import React,{useState} from 'react'
import '../styles/Nav.css'
import disney from '../assets/Disney.png'
import {Link} from 'react-router-dom'

export default function Nav() {
  const [num, setnum] = useState(1)
  function show(){
    if(num%2==0){
    document.getElementById("languageoptions").style.display='flex'
    document.getElementById("languageoptions").style.flexDirection='column'
    document.getElementById("languageoptions").style.zIndex=-3
    
    setnum(num+1)
    }
    else{
      document.getElementById("languageoptions").style.display='none'
     setnum(num+1)
    }
    
  }
  function addnum(){
    num=1
  }
  return (
    <div className='nav-container'>
        <div className='nav-bar'>
            <Link to='/'><img src={disney} width='89px' height='50px'></img></Link>
            <p className='nav-ele'>TV</p>
            <p className='nav-ele' onClick={show}>Movies</p>
            <p className='nav-ele'>Sports</p>
            <Link to='/Search'><p  onClick={addnum} className='nav-ele'>Search</p></Link>
            <p className='nav-ele'>Anime+</p>
        </div>
        <div className="languageoptions" id='languageoptions'>
          <Link to='/IndianMovies'><p className='alone'>Indian</p></Link>
          <Link to='/JapaneseMovies'><p className='alone'>Japanese</p></Link>
          <p className='alone'>Korean</p>
          <p className='alone'>American</p>
        </div>
    </div>
  )
}
