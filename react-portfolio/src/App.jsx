import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import './App.css';
import FloatingLines from './components/FloatingLines/FloatingLines';
import './FloatingLinesBackground.css';

function App() {
  const [activeNav, setActiveNav] = useState('About');

  return (
    <>
      <div
        className="app-background"
        aria-hidden="true"
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <div className="app-root">
        <main>
          <Sidebar setActiveNav={setActiveNav} />
          <div className="main-content">
            <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

            {activeNav === 'About' && <About />}
            {activeNav === 'Resume' && <Resume />}
            {activeNav === 'Portfolio' && <Portfolio />}
            {activeNav === 'Blog' && <Blog />}
            {activeNav === 'Contact' && <Contact />}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
