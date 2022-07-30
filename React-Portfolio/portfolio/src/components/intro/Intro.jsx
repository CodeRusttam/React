import React, { useEffect,useRef } from 'react'
import './intro.scss'
import {init} from 'ityped'
export default function Intro() { 

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor:true,
      strings:['FullStack NodeJS Developer', "SpeedCuber", "Mathematician"],
      backDelay: 1500,
      backSpeed: 70,
    })
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
         <div className="imgContainer">
           <img src="assets/Myphoto.jpg" alt="" />
         </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Azadaliyev Rustam</h1>
          <h3>
            I'm <span ref={textRef}></span>
            </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}
