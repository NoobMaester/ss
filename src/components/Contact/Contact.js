import { useRef } from 'react';
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import classes from './Contact.module.css'
import emailjs from '@emailjs/browser'

const Contact = ({openModal, setOpenModal}) => {

  const firstRef = useRef(null);
  const lastRef = useRef(null);

  //setting up email js
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4a39wc', 'template_q5ox8np', form.current, 'ZxLze5U5dUJZedrOo')
    .then((result) => {
      console.log(result.text);
      setOpenModal(true)
    }, (error) => {
      console.log(error.text)
    });

    //clear all inputs
    e.target.reset();
  };

  return (
    <div id='contact'>
      <h1 className={classes.title}>Contact Us</h1>

      <div className={classes.contact}>

        <div className={classes.container}>
          <form ref={form} onSubmit={sendEmail} className={classes.form}>
            <input ref={firstRef} type="text" placeholder='Enter Your Name' name='user_name' required />
            
            <input ref={lastRef} type="email" placeholder='Enter Your email' name='user_email' required />
            
            <textarea name="message" required placeholder='Enter Your Message' id="message" cols="30" rows="10"></textarea>
            
            <input type="submit" id='send' value='send' className={classes.btn} />
          </form>
        </div>

        <div className={classes.social}>
          <FaTwitterSquare color='#6c63ff' size='40px' style={{padding: '1%'}} 
          onClick={() => window.open('https://www.google.rw', '_blank')}/>

          <FaLinkedin color='#6c63ff' size='40px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>

          <FaFacebookSquare color='#6c63ff' size='40px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>

          <FaInstagramSquare color='#6c63ff' size='40px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>
        </div>

      </div>

      {openModal && <div className={classes.modalBg}>
        <div className={classes.modalContainer}>
          <p>Your Message is sent.</p>
          <button className={classes.btn2} onClick ={()=> setOpenModal(false)}>OK</button>
        </div>
      </div>}
    </div>
  )
}

export default Contact