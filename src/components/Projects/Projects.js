import classes from './Projects.module.css'
import data from './../../img/data.svg'
import web from './../../img/web.svg'
import iot from './../../img/iot.svg'

const Projects = () => {
  return (
    <div className={classes.project}>
        <h1>Projects</h1>
        <div className={classes.underline}></div>

        <div className={classes.cards}>
            <div className={classes.card}>
                <img src={data} alt="data" />
                <h2>Data Science</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={classes.card}>
                <img src={web} alt="web" />
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={classes.card}>
                <img src={iot} alt="iot" />
                <h2>IOT</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects