import { motion } from "framer-motion"

const NavLinks = ({isMobile, closeMenu}) => {

  const animatefrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  return (
    <ul>
      <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.05}} onClick={()=> isMobile && closeMenu()} ><a href="/">Home</a></motion.li>
      <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.10}} onClick={()=> isMobile && closeMenu()}><a href="/#about">About Us</a></motion.li>
      <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.20}} onClick={()=> isMobile && closeMenu()}><a href="/#projects">Projects</a></motion.li>
      <motion.li initial={animatefrom} animate={animateTo} transition={{delay:0.30}} onClick={()=> isMobile && closeMenu()}><a href="/#contact">Contact Us</a></motion.li>
    </ul>
  )
}

export default NavLinks