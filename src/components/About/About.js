import classes from './About.module.css'
import code from './../../img/soft1.png'

const About = () => {
  return (
    <div id='about' className={classes.about}>
      <img className={classes.code} src={code} alt="us" />
      <h1>About us</h1>
      <div className={classes.us}>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sit est tempore iste neque iusto aliquam sequi reiciendis, quae, consectetur, quas unde alias praesentium omnis at temporibus nulla necessitatibus. Laboriosam?</p>
      </div>
    </div>
  )
}

export default About