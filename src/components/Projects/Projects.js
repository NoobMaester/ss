import classes from './Projects.module.css'
import data from './../../img/data.svg'
import web from './../../img/web.svg'

const Projects = () => {
  return (
    <div id='projects' className={classes.project}>
        <h1>Projects</h1>

        <div className={classes.cards}>
            <div className={classes.card}>
                <img src={data} alt="data" />

                <h2>Mobile applications</h2>
                <p>We develop responsive and problem solving modern mobile applications using Python and Javascript frameworks</p>

            </div>
            <div className={classes.card}>
                <img src={web} alt="web" />
                <h2>Web Development</h2>
                <p>We specialise mostly in web Application. we bring solution to the finger tips of your customers</p>
            </div>
        </div>
    </div>
  )
}

export default Projects