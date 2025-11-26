import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Summer Collection 2024',
      subtitle: 'Discover the latest trends',
      button: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'New Arrivals',
      subtitle: 'Fresh styles for every occasion',
      button: 'View Collection',
      image: 'https://images.unsplash.com/photo-1485462537746-965f33f7d6a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      title: 'Limited Edition',
      subtitle: 'Exclusive designs for the fashion-forward',
      button: 'Explore',
      image: 'https://images.unsplash.com/photo-1485462538005-29cbb616fa0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Slider */}
      <section className="hero">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link to="/collections" className="cta-button">{slide.button}</Link>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-nav prev" onClick={prevSlide}>&#10094;</button>
        <button className="slider-nav next" onClick={nextSlide}>&#10095;</button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Men's Fashion" />
              <div className="category-overlay">
                <h3>Men's Fashion</h3>
                <Link to="/collections/men">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1485462538005-29cbb616fa0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Women's Fashion" />
              <div className="category-overlay">
                <h3>Women's Fashion</h3>
                <Link to="/collections/women">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Accessories" />
              <div className="category-overlay">
                <h3>Accessories</h3>
                <Link to="/collections/accessories">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="section-header">
          <h2>New Arrivals</h2>
          <Link to="/collections/new-arrivals" className="view-all">View All</Link>
        </div>
        <div className="products-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card">
              <div className="product-image">
                <img 
                  src={`https://source.unsplash.com/random/300x400/?fashion,clothing,${item}`} 
                  alt={`Product ${item}`} 
                />
                <div className="product-actions">
                  <button className="quick-view">Quick View</button>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
              <div className="product-info">
                <h3>Product Name {item}</h3>
                <p className="price">$49.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
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

export default Home;
