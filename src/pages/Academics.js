import React from 'react';
import '../styles/Academics.css';

const Academics = () => {
  const programs = [
    {
      id: 1,
      title: 'Primary Education',
      description: 'Foundational education for young learners with a focus on holistic development.',
      duration: 'Grades 1-5',
      icon: 'fas fa-child'
    },
    {
      id: 2,
      title: 'Middle School',
      description: 'Building strong academic fundamentals with exploratory learning opportunities.',
      duration: 'Grades 6-8',
      icon: 'fas fa-book-reader'
    },
    {
      id: 3,
      title: 'High School',
      description: 'Comprehensive curriculum preparing students for higher education and beyond.',
      duration: 'Grades 9-10',
      icon: 'fas fa-graduation-cap'
    },
    {
      id: 4,
      title: 'Senior Secondary',
      description: 'Specialized streams in Science, Commerce, and Humanities with career-focused education.',
      duration: 'Grades 11-12',
      icon: 'fas fa-atom'
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: 'fas fa-square-root-alt' },
    { name: 'Science', icon: 'fas fa-flask' },
    { name: 'English', icon: 'fas fa-language' },
    { name: 'Social Studies', icon: 'fas fa-globe-americas' },
    { name: 'Computer Science', icon: 'fas fa-laptop-code' },
    { name: 'Languages', icon: 'fas fa-comments' },
    { name: 'Arts', icon: 'fas fa-palette' },
    { name: 'Physical Education', icon: 'fas fa-running' }
  ];

  return (
    <div className="academics">
      <section className="academics-hero">
        <div className="container">
          <h1>Academics</h1>
          <p>Excellence in Education and Beyond</p>
        </div>
      </section>
      
      <section className="academic-programs">
        <div className="container">
          <div className="section-header">
            <h2>Our Academic Programs</h2>
            <p>Comprehensive education for every stage of learning</p>
          </div>
          
          <div className="programs-grid">
            {programs.map(program => (
              <div key={program.id} className="program-card">
                <div className="program-icon">
                  <i className={program.icon}></i>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-duration">{program.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="curriculum">
        <div className="container">
          <div className="section-header">
            <h2>Curriculum Overview</h2>
            <p>Balanced and comprehensive learning experience</p>
          </div>
          
          <div className="curriculum-content">
            <div className="curriculum-text">
              <p>
                At COTHS, we follow a well-structured curriculum that emphasizes both academic excellence and 
                personal development. Our curriculum is designed to foster critical thinking, creativity, and 
                problem-solving skills in students.
              </p>
              <p>
                We integrate modern teaching methodologies with traditional values to provide a holistic 
                education that prepares students for the challenges of the 21st century.
              </p>
              <div className="curriculum-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Interactive Learning</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Technology Integration</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Practical Applications</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Continuous Assessment</span>
                </div>
              </div>
            </div>
            <div className="curriculum-image">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="subject-areas">
        <div className="container">
          <div className="section-header">
            <h2>Subject Areas</h2>
            <p>Comprehensive coverage of all major disciplines</p>
          </div>
          
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject-card">
                <i className={subject.icon}></i>
                <h4>{subject.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="academic-calendar">
        <div className="container">
          <div className="section-header">
            <h2>Academic Calendar</h2>
            <p>Important dates and events for the academic year</p>
          </div>
          
          <div className="calendar-highlights">
            <div className="calendar-event">
              <div className="event-date">
                <span className="month">JAN</span>
                <span className="day">15</span>
              </div>
              <div className="event-details">
                <h4>Winter Break Ends</h4>
                <p>Classes resume after winter vacation</p>
              </div>
            </div>
            <div className="calendar-event">
              <div className="event-date">
                <span className="month">MAR</span>
                <span className="day">20-25</span>
              </div>
              <div className="event-details">
                <h4>Mid-Term Examinations</h4>
                <p>Mid-term assessments for all grades</p>
              </div>
            </div>
            <div className="calendar-event">
              <div className="event-date">
                <span className="month">MAY</span>
                <span className="day">1</span>
              </div>
              <div className="event-details">
                <h4>Summer Vacation Begins</h4>
                <p>School closes for summer break</p>
              </div>
            </div>
          </div>
          
          <div className="calendar-cta">
            <button className="btn-primary">View Full Calendar</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
