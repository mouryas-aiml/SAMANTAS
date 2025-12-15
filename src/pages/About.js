import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About SAMANTAS</h1>
          <p>Excellence in Education Since 2005</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Samantas by Aparna is where tradition meets contemporary elegance. A celebration of India's rich textile heritage,
                 we curate timeless pieces for the modern woman who honors her roots while embracing her individuality. From intricately 
                 crafted kurtas and graceful sarees to statement ethnic sets and festive ensembles—each piece is a tribute to artisanal
                  craftsmanship, woven with heritage techniques and finished with meticulous detail.
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
