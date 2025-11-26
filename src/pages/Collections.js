import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Collections.css';

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const collections = [
    {
      id: 1,
      title: 'Summer Collection',
      category: 'women',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016042?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$49.99',
      isNew: true
    },
    {
      id: 2,
      title: 'Classic Denim',
      category: 'men',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$59.99',
      isNew: false
    },
    {
      id: 3,
      title: 'Elegant Dresses',
      category: 'women',
      image: 'https://images.unsplash.com/photo-1539109136884-043d88edca8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$69.99',
      isNew: true
    },
    {
      id: 4,
      title: 'Casual Wear',
      category: 'men',
      image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$39.99',
      isNew: false
    },
    {
      id: 5,
      title: 'Accessories',
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '$29.99',
      isNew: true
    },
    {
      id: 6,
      title: 'Formal Collection',
      category: 'women',
      image: 'https://images.unsplash.com/photo-1539109136884-043d88edca8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
      price: '$79.99',
      isNew: false
    },
  ];

  const filteredCollections = activeFilter === 'all' 
    ? collections 
    : collections.filter(item => item.category === activeFilter);

  return (
    <div className="collections-page">
      <section className="collections-hero">
        <div className="container">
          <h1>Our Collections</h1>
          <p>Discover the latest trends in fashion</p>
        </div>
      </section>

      <section className="collections-content">
        <div className="container">
          <div className="filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Items
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'women' ? 'active' : ''}`}
              onClick={() => setActiveFilter('women')}
            >
              Women's Fashion
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'men' ? 'active' : ''}`}
              onClick={() => setActiveFilter('men')}
            >
              Men's Fashion
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'accessories' ? 'active' : ''}`}
              onClick={() => setActiveFilter('accessories')}
            >
              Accessories
            </button>
          </div>

          <div className="collections-grid">
            {filteredCollections.map((item) => (
              <div key={item.id} className="collection-item">
                <div className="collection-image">
                  <img src={item.image} alt={item.title} />
                  <div className="collection-overlay">
                    <Link to={`/product/${item.id}`} className="view-details">
                      View Details
                    </Link>
                    <button className="quick-shop">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                  {item.isNew && <span className="new-badge">New</span>}
                </div>
                <div className="collection-info">
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates on new products and upcoming sales</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Collections;
