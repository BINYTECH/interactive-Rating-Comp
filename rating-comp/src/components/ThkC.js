import React from 'react'
import StarLogo from '../assets/images/illustration-thank-you.svg'
const ThkC = (props) => {
  
  return (
    
        <div className='card bg-gray-900 w-80 h-96 md:h-72 md:w-72 px-5 md:px-4 rounded-2xl flex flex-col justify-center'>
       
         <img  className=' w-40 h-32 md:w-36 md:h-28 ml-12 mt-0  mb-4' src={StarLogo} alt="star"/>
       
       <p className='bg-gray-800 rounded-3xl ml-12 pt-1 text-sm md:text-xs h-7 w-44 md:w-36  text-orange-500 text-center'>You selected {props.value} out of 5</p>
       <h2 className=' py-3 text-2xl md:text-xl font-semibold text-white'>Thank You!</h2>
       <p className=' text-lg md:text-xs text-center text-gray-400'>We appreciate you taking the time to give a rating.
       If you ever need more support, don't hesitate to get in touch.</p>

       </div>
    
  )
}

export default ThkC