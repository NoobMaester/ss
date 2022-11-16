import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.container}>
          <h1 className={classes.hello}>Hello Binders.</h1>
          <p>Let us bind you to the world's fastest and digital transport solutions.</p>
        </div>
    </div>
  )
}

export default Home;