import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Models.css';

const Models = () => {
  const models = [
    {
      id: 1,
      name: 'Alex Johnson',
      category: 'Men\'s Fashion',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      instagram: 'alexjohnson',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      category: 'Women\'s Fashion',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      instagram: 'sarahwill',
    },
    {
      id: 3,
      name: 'Michael Chen',
      category: 'Men\'s Fashion',
      image: 'https://images.unsplash.com/photo-1519085360759-3247116300ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      instagram: 'michaelc',
    },
    {
      id: 4,
      name: 'Emma Davis',
      category: 'Women\'s Fashion',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      instagram: 'emmad',
    },
  ];

  return (
    <div className="models-page">
      <section className="models-hero">
        <div className="container">
          <h1>Our Models</h1>
          <p>Meet the faces behind our brand</p>
        </div>
      </section>

      <section className="models-grid">
        <div className="container">
          <h2 className="section-title">Featured Models</h2>
          <div className="models-container">
            {models.map((model) => (
              <div key={model.id} className="model-card">
                <div className="model-image">
                  <img src={model.image} alt={model.name} />
                  <div className="model-overlay">
                    <a 
                      href={`https://instagram.com/${model.instagram}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="instagram-link"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="model-info">
                  <h3>{model.name}</h3>
                  <p className="category">{model.category}</p>
                  <a 
                    href={`https://instagram.com/${model.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instagram-handle"
                  >
                    @{model.instagram}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team">
        <div className="container">
          <h2>Want to Join Our Team?</h2>
          <p>We're always looking for fresh faces to represent our brand</p>
          <Link to="/contact" className="btn">Apply Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Models;
