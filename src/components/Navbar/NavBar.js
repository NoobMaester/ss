import MobileNavigation from './MobileNavigation';
import classes from './NavBar.module.css';
import Navigation from './Navigation';
import { motion } from "framer-motion";


const NavBar = () => {

  const animatefrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  return (

    <div>
      <nav className={classes.navbar}>
        <motion.h1 initial={animatefrom} animate={animateTo}>Binder Tech</motion.h1>
        <Navigation/>
        <MobileNavigation/>     
      </nav>

    </div>
  )
}

export default NavBar;