import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <div>
        <nav className={classes.navbar}>
            <h1>ss</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#contact">Contact Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;