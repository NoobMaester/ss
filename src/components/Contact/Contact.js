import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import classes from './Contact.module.css'

const Contact = () => {

  return (
    <div id='contact' className={classes.contact}>
        <FaTwitterSquare color='#8C1CD1' size='48px' style={{padding: '1%'}} 
        onClick={() => window.open('https://www.google.rw', '_blank')}/>
        <FaLinkedin color='#8C1CD1' size='48px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>
        <FaFacebookSquare color='#8C1CD1' size='48px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>
        <FaInstagramSquare color='#8C1CD1' size='48px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>
    </div>
  )
}

export default Contact