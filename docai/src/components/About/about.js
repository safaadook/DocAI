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
          <img src="path/to/logo.png" alt="DocAI Logo" className="logo" />
          <h2>DocAI</h2>
        </div>
        <div className="vision">
          <h3>DocAI Vision</h3>
          <p>SOS A</p>
          <p>BLALAA</p>
          <p>BLLLA</p>
          <p>BLLLA BLLLA</p>
          <p>BLLL A BLLLLLL ALLA</p>
        </div>
      </section>


    </div>
  );
}

export default About;
