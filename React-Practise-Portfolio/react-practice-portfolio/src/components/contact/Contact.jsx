import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ee9h9mq', 'template_svfu0lq', form.current, 'wlFX6TKKE_p-CxL9v')
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rustam.azadaliyev.09@gmail.com</h5>
            <a href="rustam.azadaliyev.09@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+380935414656</h5>
            <a href="https://api.whatsapp.com/send?phone=+380935414656" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} action="" onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary className="contact__option-icon"'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact