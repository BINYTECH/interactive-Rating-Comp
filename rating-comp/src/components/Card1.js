import React, { useState } from 'react'
import StarLogo from '../assets/images/icon-star.svg'
import Card from './ThkC'
import audio from '../assets/PSGp.mp3'

const Card1 = (props) => {
  const [togTy, setTogTy] = useState(false);
  const [togRa, setTogRa] = useState(true);
  const [value, setValue] = useState(0);
      function changeToggle(){
          setTogTy(true);
          setTogRa(false)
      }
      const clickHandler = (e) => {
        const btn=document.querySelector('#submit');
        btn.style.backgroundColor = 'white';
        btn.style.color = 'orange'
        console.log(e.target.value);
        setValue(e.target.value);
    }
      
      const playAudio=()=>{
          new Audio(audio).play();
          changeToggle();
      }
      
  return (
      <>
        <div>
        {togRa &&   <div className='card h-96 w-80 bg-gray-900 md:h-72 md:w-72 rounded-2xl py-5 px-5'>
       <div className='w-10 h-10 rounded-full bg-slate-800'>
         <img className='px-3 py-3' src={StarLogo} alt="star"/>
       </div>
       <h2 className='text-left py-3 text-2xl md:text-xl font-semibold text-white'>How did we do?</h2>
       <p className='text-left text-lg md:text-xs text-gray-400'>Please let us know how we did with your support request. All feedback is appreciated
       to help us improve our offering!</p>
        <div className='balls py-7 md:py-5 flex justify-between place-items-center text-sm font-semibold' >
          <button className='w-12 h-12 md:w-10 md:h-10 px-2 py-2 rounded-full bg-slate-800 text-gray-400 focus:bg-orange-600 focus:text-white' value="1" onClick={clickHandler}>1</button>
          <button className='w-12 h-12  md:w-10 md:h-10 px-2 py-2 rounded-full bg-slate-800 text-gray-400 focus:bg-orange-600 focus:text-white' value="2" onClick={clickHandler}>2</button>
          <button className='w-12 h-12  md:w-10 md:h-10 px-2 py-2 rounded-full bg-slate-800 text-gray-400 focus:bg-orange-600 focus:text-white' value="3" onClick={clickHandler}>3</button>
          <button className='w-12 h-12  md:w-10 md:h-10 px-2 py-2 rounded-full bg-slate-800 text-gray-400 focus:bg-orange-600 focus:text-white' value="4" onClick={clickHandler}>4</button>
          <button className='w-12 h-12  md:w-10 md:h-10 px-2 py-2 rounded-full bg-slate-800 text-gray-400 focus:bg-orange-600 focus:text-white' value="5" onClick={clickHandler}>5</button>
        </div>

        <button className='w-full h-10 md:h-7 rounded-3xl md:rounded-2xl bg-orange-600 tracking-wider text-slate-300 font-semibold uppercase text-base md:text-xs active:bg-white active:text-orange-600' id="submit" onClick={playAudio}>Submit</button>
       </div>}
    </div>
         {togTy && <Card value={value}/>}
    </>
  )
}

export default Card1