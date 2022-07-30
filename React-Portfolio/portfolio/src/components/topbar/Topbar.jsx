import React from 'react'
import './topbar.scss'
import {AiFillWeiboCircle} from 'react-icons/ai'
import{ AiOutlineFileSync} from 'react-icons/ai'
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a className='logo'>Rustam</a>
                <div className="itemContainer">
                 <AiFillWeiboCircle className='icon'/>
                   <span>+994 050 682 62 15</span>
                </div>
                <div className="itemContainer">
                   <AiOutlineFileSync className='icon' />
                   <span>rustem.eliyev.06@inbox.ru</span>
                </div>
            </div>
            <div className="right">
               <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                 <span className='line1'></span>
                 <span className='line2'></span>
                 <span className='line3'></span>  
               </div>
            </div>
        </div>
    </div>
  )
}
