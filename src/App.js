import About from './components/About/About';
import Home from './components/Home/Home'
import NavBar from './components/Navbar/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
