import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {FiInstagram} from 'react-icons/fi'

function Contact() {
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ebrahimemami9170@gmail.com</h5>
            <a href="mailto:ebrahimemami9170@gmail.com">Send a message</a>
          </article>   
          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>ebrahimemami9170</h5>
            <a href="https://web.telegram.org">Send a message</a>
          </article>   
          <article className='contact__option'>
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>__ebrahim__emami</h5>
            <a href="https://www.instagram.com/">Send a message</a>
          </article>   
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact