import React from 'react';
import './about.css';



function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1><a href="#docAI">DocAI</a></h1>
        <nav>
          <ul>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="about-main">
        <div className="logo-section">
          <img src="/logoAbout.png" alt="DocAI Logo" className="logo" style={{ width: '300px', height: 'auto' }} />
        </div>

      </section>

      <section className="features">
        <div className="feature-box">
          <span className="icon pill-icon"></span>
          <p>DocAI can identify symptoms based on what the user inputs and suggest a diagnosis and treatment based on this.</p>
        </div>
        <div className="feature-box">
          <span className="icon heart-icon"></span>
          <p>DocAI provides quick and accessible healthcare support at no added cost by providing an immediate list of suggested medications.</p>
        </div>
        <div className="feature-box">
          <span className="icon pharmacy-icon"></span>
          <p>DocAI also includes the option to locate nearby pharmacies in order to purchase the necessary medications.</p>
        </div>
      </section>


    </div>
  );
}

export default About;


