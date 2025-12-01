import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [activeNav, setActiveNav] = useState('About');

  return (
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
  );
}

export default App;
