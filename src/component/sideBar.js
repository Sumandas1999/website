import React from 'react'
import insta from '../ICONS/Instagram-Logo.wine.svg'
import twitter from '../ICONS/Twitter-Logo.wine.svg'
import meta from '../ICONS/meta.svg'
import mail from '../ICONS/gmail.svg'


function Side() {
  return (
    <div className= ' social-bar flex flex-col  h-auto  w-16 space-y-4 md:space-y-8 justify-center items-center pt-2  sticky top-12 '>
        <a className='icons' href='https://www.instagram.com/__s____d_/'> <img className=' h-5vh  ' src={insta} ></img> </a>
       <a className='icons' href='https://twitter.com/Sumandas614319'><img className=' h-5vh  ' src={twitter}></img> </a> 
        <a className='icons' href='ku2sumandas19999@gmail.com'><img className=' h-5vh  ' src={mail}></img> </a>
        <  img className='icons  h-5vh   hiddden' src={meta}></img>
    </div>
  )
}

export default Side;