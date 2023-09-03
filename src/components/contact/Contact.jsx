import React from 'react';
import './contact.css';
import {TfiEmail} from 'react-icons/tfi';
import {BsWhatsapp} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r4n4wwo', 'service_r4n4wwo', form.current, 'h_KHjrzVMFJi-DbkK')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return (
    <>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>shruuu.varadarajan@gmail.com</h5>
              <a href="mailto:shruuu.varadarajan@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>9884404410</h5>
              <a href="https://api.whatsapp.com/send?phone=9884404410" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
            <GrInstagram className='contact__option-icon'/>
              <h4>Insatgram</h4>
              <h5>@shruvarad</h5>
              <a href="https://www.instagram.com/shruvarad/?igshid=ZDdkNTZiNTM%3D" target='_blank'>Send a message</a>
            </article>
          </div>
          {/* End of contact */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
