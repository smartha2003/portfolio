// App.tsx
import './App.css';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-site bg-no-repeat bg-cover overflow-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col relative ">
          {/* <Home /> */}
          <About />
          <Projects />
          <Experience />
          <Gallery/>
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
