import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portofolio />
      <Contact />
      {/* <div style={{ height: '200vh', width: '100%' }}> </div> */}
      <Footer />
    </>
  );
}

export default App;
