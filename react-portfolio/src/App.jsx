import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import FloatingLines from './components/FloatingLines/FloatingLines';
import './App.css';
import './glassmorphism.css';

function App() {
  const [activeNav, setActiveNav] = useState('About');

  return (
    <main>
      {/* Animated background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.3
      }}>
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          mixBlendMode="screen"
        />
      </div>

      <Sidebar setActiveNav={setActiveNav} />
      <div className="main-content glass-content">
        <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

        {activeNav === 'About' && <About />}
        {activeNav === 'Resume' && <Resume />}
        {activeNav === 'Portfolio' && <Portfolio />}
        {activeNav === 'Blog' && <Blog />}
        {activeNav === 'Contact' && <Contact />}
      </div>
    </main>
  );
}

export default App;
