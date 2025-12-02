import { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSelectActive, setIsSelectActive] = useState(false);

  const projects = [
    { title: 'Finance', category: 'Web development', image: '/assets/images/project-1.jpg' },
    { title: 'Orizon', category: 'Web development', image: '/assets/images/project-2.png' },
    { title: 'Fundo', category: 'Web design', image: '/assets/images/project-3.jpg' },
    { title: 'Brawlhalla', category: 'Applications', image: '/assets/images/project-4.png' },
    { title: 'DSM.', category: 'Web design', image: '/assets/images/project-5.png' },
    { title: 'MetaSpark', category: 'Web design', image: '/assets/images/project-6.png' },
    { title: 'Summary', category: 'Web development', image: '/assets/images/project-7.png' },
    { title: 'Task Manager', category: 'Applications', image: '/assets/images/project-8.jpg' },
    { title: 'Arrival', category: 'Web development', image: '/assets/images/project-9.png' }
  ];

  const filterOptions = ['All', 'Web design', 'Applications', 'Web development'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleSelectClick = () => {
    setIsSelectActive(!isSelectActive);
  };

  const handleSelectItem = (filter) => {
    setActiveFilter(filter);
    setIsSelectActive(false);
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filterOptions.map((filter) => (
            <li className="filter-item" key={filter}>
              <button
                className={`glass-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                data-filter-btn
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className={`filter-select glass-filter ${isSelectActive ? 'active' : ''}`} data-select onClick={handleSelectClick}>
            <div className="select-value" data-select-value>{activeFilter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {filterOptions.map((filter) => (
              <li className="select-item" key={filter}>
                <button data-select-item onClick={() => handleSelectItem(filter)}>
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category.toLowerCase()}
              key={index}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
