import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portofolio />
      <Contact />
      {/* <div style={{ height: '200vh', width: '100%' }}> </div> */}
      <Footer />
    </>
  );
}

export default App;
