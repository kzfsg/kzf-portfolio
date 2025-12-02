import './Navbar.css';

const Navbar = ({ activeNav, setActiveNav }) => {
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  const handleNavClick = (item) => {
    setActiveNav(item);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar glass-navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${activeNav === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
              data-nav-link
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
