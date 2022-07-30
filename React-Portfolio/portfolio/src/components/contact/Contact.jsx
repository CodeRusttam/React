import React from 'react'
import { useState } from 'react'
import './contact.scss'
export default function () {
  const [message,setMessage] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMessage(true)
    removeFunction()
  }
  const removeFunction = () => {
    setTimeout(() => {
      setMessage(false)
    }, 3000);
  }
  return (
    <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Email'/>
              <textarea placeholder='Message'></textarea>
              <button type='submit'>Send</button>
              {message && <span>Thanks, I will reply ASP :)</span>}
            </form>
        </div>
    </div>
  )
}
