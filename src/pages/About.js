import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About COTHS</h1>
          <p>Excellence in Education Since 1995</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Established in 1995, COTHS (City of Tomorrow High School) has been a beacon of quality education, 
                nurturing young minds and preparing them for the challenges of tomorrow. Our commitment to academic 
                excellence, character development, and holistic education has made us one of the most respected 
                educational institutions in the region.
              </p>
              <p>
                With state-of-the-art facilities, experienced faculty, and a student-centered approach, we provide 
                an environment where students can explore their potential and achieve their dreams.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1523050853548-5201af361e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="COTHS Campus"
              />
            </div>
          </div>
          
          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To provide a transformative educational experience that empowers students to become responsible, 
                ethical, and innovative global citizens who contribute meaningfully to society.
              </p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To be a leading educational institution that sets benchmarks in academic excellence, innovation, 
                and character development, shaping the leaders of tomorrow.
              </p>
            </div>
          </div>
          
          <div className="core-values">
            <h2>Core Values</h2>
            <div className="values-grid">
              <div className="value">
                <i className="fas fa-star"></i>
                <h4>Excellence</h4>
                <p>Striving for the highest standards in all we do</p>
              </div>
              <div className="value">
                <i className="fas fa-users"></i>
                <h4>Integrity</h4>
                <p>Upholding the highest ethical standards</p>
              </div>
              <div className="value">
                <i className="fas fa-lightbulb"></i>
                <h4>Innovation</h4>
                <p>Encouraging creativity and new ideas</p>
              </div>
              <div className="value">
                <i className="fas fa-heart"></i>
                <h4>Compassion</h4>
                <p>Caring for our community and environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
