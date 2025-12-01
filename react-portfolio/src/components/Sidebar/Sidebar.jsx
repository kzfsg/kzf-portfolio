import './Sidebar.css';

const Sidebar = ({ setActiveNav }) => {
  // Work status can be: "available" or "employed"
  const workStatus = "available"; // Change this to "employed" when needed

  const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'logo-linkedin' },
    { name: 'GitHub', url: 'https://github.com/yourprofile', icon: 'logo-github' },
  ];

  const handleContactClick = () => {
    if (setActiveNav) {
      setActiveNav('Contact');
      window.scrollTo(0, 0);
    }
  };

  const handleDownloadCV = () => {
    // This will be implemented later when you add your CV
    // For now, it's a placeholder
    console.log('Download CV clicked');
    // Future implementation:
    // window.open('/path-to-your-cv.pdf', '_blank');
  };

  return (
    <aside className="sidebar active" data-sidebar>
      <div className="sidebar-info">
        {/* Avatar */}
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Kwok Zheng Feng" width="240" />
        </figure>

        {/* Name and Work Status */}
        <div className="info-content">
          <p className={`work-status ${workStatus}`}>
            <span className="status-indicator"></span>
            {workStatus === "available" ? "Available for work" : "Currently employed"}
          </p>
          <h1 className="name" title="Kwok Zheng Feng">Kwok Zheng Feng</h1>
          {/* Socials and Links */}
        <div className="social-section">
          <ul className="social-list">
            {socials.map((social, index) => (
              <li className="social-item" key={index}>
                <a
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn primary-btn" onClick={handleDownloadCV}>
            <ion-icon name="download-outline"></ion-icon>
            <span>Download CV</span>
          </button>

          <button className="action-btn secondary-btn" onClick={handleContactClick}>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <span>Contact Me</span>
          </button>
        </div>
    </aside>
  );
};

export default Sidebar;
