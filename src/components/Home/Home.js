import classes from './Home.module.css'
// import code from './../../img/code.svg'
// import binary from './../../img/binary.svg'

const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.container}>
            <h1 className={classes.hello}>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Dolorem ipsa dignissimos similique? Laboriosam corporis esse commodi odit saepe? Deleniti, sint molestias.</p>
        </div>
        {/* <img className={classes.code} src={code} alt="code" />
        <img className={classes.binary} src={binary} alt="binary" /> */}
    </div>
  )
}

export default Home;