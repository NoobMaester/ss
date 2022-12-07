import classes from './Projects.module.css'
import mob from './../../img/mob.svg'
import web from './../../img/web.svg'
import prog from './../../img/prog.png'
import { motion } from 'framer-motion'

const Projects = () => {

  const animatefrom = {opacity: 0, x: -80}
  const animateTo = {opacity: 1, x: 0}

  return (
    <div id='projects' className={classes.project}>
      <h1>What We Do</h1>

      <div className={classes.cards}>
        <div>
          <motion.div initial={animatefrom} animate={animateTo} transition={{delay:0.05}} className={classes.card}>
            <img src={mob} alt="mobile" />

            <h2>Mobile applications</h2>
            <p>We develop responsive and problem solving modern mobile applications using Python and Javascript frameworks</p>

          </motion.div>

          <motion.div initial={animatefrom} animate={animateTo} transition={{delay:0.20}} className={classes.card}>
            <img src={web} alt="web" />
            <h2>Web Development</h2>
            <p>We specialise mostly in web Applications. we bring solutions to the finger tips of your customers</p>
          </motion.div>
        </div>

        <img className={classes.pj} src={prog} alt="prog" />
      </div>
    </div>
  )
}

export default Projects