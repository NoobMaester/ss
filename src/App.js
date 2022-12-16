import { useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home'
import NavBar from './components/Navbar/NavBar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact openModal = {openModal} setOpenModal={setOpenModal} />
      <Footer />
    </div>
  );
}

export default App;
