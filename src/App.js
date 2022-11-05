import About from './components/About/About';
import Home from './components/Home/Home'
import NavBar from './components/Navbar/NavBar';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
