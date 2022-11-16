import About from './components/About/About';
import Home from './components/Home/Home'
import NavBar from './components/Navbar/NavBar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
