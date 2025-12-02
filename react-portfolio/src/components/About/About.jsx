import { useState } from 'react';
import './About.css';

const About = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const services = [
    {
      icon: '/assets/images/icon-design.svg',
      title: 'Web design',
      description: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: '/assets/images/icon-dev.svg',
      title: 'Web development',
      description: 'High-quality development of sites at the professional level.'
    },
    {
      icon: '/assets/images/icon-app.svg',
      title: 'Mobile apps',
      description: 'Professional development of applications for iOS and Android.'
    },
    {
      icon: '/assets/images/icon-photo.svg',
      title: 'Photography',
      description: 'I make high-quality photos of any category at a professional level.'
    }
  ];

  const testimonials = [
    {
      name: 'Daniel lewis',
      avatar: '/assets/images/avatar-1.png',
      date: '2021-06-14',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Jessica miller',
      avatar: '/assets/images/avatar-2.png',
      date: '2021-06-14',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Emily evans',
      avatar: '/assets/images/avatar-3.png',
      date: '2021-06-14',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      name: 'Henry william',
      avatar: '/assets/images/avatar-4.png',
      date: '2021-06-14',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    }
  ];

  const clients = [
    '/assets/images/logo-1-color.png',
    '/assets/images/logo-2-color.png',
    '/assets/images/logo-3-color.png',
    '/assets/images/logo-4-color.png',
    '/assets/images/logo-5-color.png',
    '/assets/images/logo-6-color.png'
  ];

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item glass-card" key={index}>
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li className="testimonials-item" key={index}>
              <div className="content-card glass-card" data-testimonials-item onClick={() => openModal(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {selectedTestimonial && (
        <div className="modal-container active" data-modal-container>
          <div className="overlay" data-overlay onClick={closeModal}></div>

          <section className="testimonials-modal glass-modal">
            <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} width="80" data-modal-img />
              </figure>

              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>{selectedTestimonial.name}</h4>

              <time dateTime={selectedTestimonial.date}>14 June, 2021</time>

              <div data-modal-text>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li className="clients-item" key={index}>
              <a href="#">
                <img src={client} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
