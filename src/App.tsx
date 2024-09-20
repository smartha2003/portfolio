// App.tsx
import './App.css';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col relative">
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
