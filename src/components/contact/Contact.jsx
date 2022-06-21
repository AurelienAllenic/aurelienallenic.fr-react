import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohqoijk', 'template_w9q6vir', form.current, 'dWzWUkYBQ9ERFSUxC')
         
    e.target.reset();
    alert('message envoyé')

  };
  return (
    <section id="contact">
      <h2>Me contacter</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>aurelien.allenic@gmail.com</h5>
              <a href="mailto:aurelien.allenic@gmail.com"target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Allenic Aurélien</h5>
              <a href="https://www.facebook.com/profile.php?id=100008646846896"target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <a href="https://wa.me/33783013682" target='_blank'>Send a message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name'required />
            <input type="email" name='email' placeholder='Your Email'required />
            <textarea name="message" placeholder='Your message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact