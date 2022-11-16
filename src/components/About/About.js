import classes from './About.module.css'
import code from './../../img/soft1.png'

const About = () => {
  return (
    <div id='about' className={classes.about}>
      <img className={classes.code} src={code} alt="us" />
      <h1>About us</h1>
      <div className={classes.us}>
        <h2>We provide smart Truck shipment&transport services</h2>
        <p>A software company that create smart transport solutions for container owners.</p>
      </div>
    </div>
  )
}

export default About