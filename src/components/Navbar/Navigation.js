import NavLinks from './NavLinks';
import classes from './NavBar.module.css';

function Navigation() {
  return (
    <nav className={classes.nav}>
      <NavLinks/>
    </nav>
  )
}

export default Navigation