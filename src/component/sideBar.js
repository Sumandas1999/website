import React from 'react'
import insta from '../ICONS/Instagram-Logo.wine.svg'
import twitter from '../ICONS/Twitter-Logo.wine.svg'
import meta from '../ICONS/meta.svg'
import mail from '../ICONS/gmail.svg'


function Side() {
  return (
    <div className= ' social-bar flex flex-col  h-auto  w-16 space-y-8 justify-center items-center pt-2 rounded-lg sticky top-12 '>
        <a href='https://www.instagram.com/__s____d_/'> <img className='social h-5vh  border-solid border-2 border-sky-500 rounded-lg  ' src={insta} ></img> </a>
       <a href='https://twitter.com/Sumandas614319'><img className='social h-5vh  border-solid border-2 border-sky-500 rounded-lg' src={twitter}></img> </a> 
        <a href='ku2sumandas19999@gmail.com'><img className='social h-5vh  border-solid border-2 border-sky-500 rounded-lg' src={mail}></img> </a>
        <img className='social h-5vh  border-solid border-2 border-sky-500 rounded-lg hiddden' src={meta}></img>
    </div>
  )
}

export default Side;