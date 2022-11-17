import classes from './Projects.module.css'
import mob from './../../img/mob.svg'
import web from './../../img/web.svg'
import prog from './../../img/prog.png'

const Projects = () => {
  return (
    <div id='projects' className={classes.project}>
        <h1>Projects</h1>

        <div className={classes.cards}>
          <div>
            <div className={classes.card}>
              <img src={mob} alt="mobile" />

              <h2>Mobile applications</h2>
              <p>We develop responsive and problem solving modern mobile applications using Python and Javascript frameworks</p>

            </div>

            <div className={classes.card}>
              <img src={web} alt="web" />
              <h2>Web Development</h2>
              <p>We specialise mostly in web Applications. we bring solutions to the finger tips of your customers</p>
            </div>
          </div>

          <img className={classes.pj} src={prog} alt="prog" />
        </div>
    </div>
  )
}

export default Projects