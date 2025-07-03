// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Next-Gen Bots, Supercharged by TechScope</h2>
        <p>Automation, AI, and power at your fingertips.</p>
        <Link to="/products" className="cta-button">Browse Bots</Link>
      </section>

      <section id="about" className="about">
        <h3>About TechScope</h3>
        <p>
          TechScope specializes in developing advanced AI-driven automation tools tailored for businesses, infrastructure projects, 
          and digital operations. Our solutions are designed to streamline workflows, extract insights from complex data sources like engineering schematics and CAD drawings, 
          and power decision-making through intelligent algorithms.
          Founded with the vision of bridging artificial intelligence and real-world utility, TechScope empowers companies to scale efficiently, reduce manual overhead, and accelerate innovation through custom-built, high performance automation systems.
        </p>
        <p>
          Our mission is to merge artificial intelligence with usability, giving creators and
          businesses the tools to scale faster than ever.
        </p>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Link to="/" className="logo-link">
            <img
              src="/TechScopeLogo.png"
              alt="TechScope Logo"
              className="logo-image"
            />
            <span className="logo-text">TechScope</span>
          </Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        <section id="contact" className="contact">
          <h3>Let's Connect</h3>
          <p>Email: <a href="mailto:techscope2025il@gmail.com">techscope2025il@gmail.com</a></p>
        </section>

        <footer className="footer">
          <p>&copy; 2025 TechScope ⚡ All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
