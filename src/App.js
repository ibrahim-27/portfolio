import './App.css';
import Hero from '../src/components/Hero'
import Picture from '../src/components/Picture'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Hero/>
        <Picture/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
