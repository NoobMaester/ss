import MobileNavigation from './MobileNavigation';
import classes from './NavBar.module.css';
import Navigation from './Navigation';


const NavBar = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <h1>Binder Tech</h1>
        <Navigation/>
        <MobileNavigation/>     
      </nav>

    </div>
  )
}

export default NavBar;