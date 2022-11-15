import classes from './NavBar.module.css';
import NavLinks from './NavLinks'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const menuOpen = <AiOutlineMenu className={classes.hamburger} size='40px' color='white' onClick={()=> setOpen(!open)}/>

  const menuClose = <AiOutlineClose className={classes.hamburger} size='40px' color='white' onClick={()=> setOpen(!open)}/>

  const closeMenu = () => setOpen(false);

  return (
    <nav className={classes.mobileNav}>
      {open ? menuClose : menuOpen}
      {open && <NavLinks isMobile={true} closeMenu={closeMenu}/>}
    </nav>
  )
}

export default MobileNavigation