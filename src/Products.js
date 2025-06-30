import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();

  return (
    <section className="products">
      <h3>🔥 Featured Models</h3>
      <div className="product-grid">

        <div className="product-card">
          <h4>📐 AutoCAD Drawings Summarizer</h4>
          <p>
            AI-powered model that reads AutoCAD drawings and extracts details like number of traffic 
            signs, road measurements, and structural insights - all automatically. 
            This advanced solution was independently developed by the founder of TechScope, 
            showcasing our commitment to cutting-edge innovation and hands-on expertise.
          </p>
          <button
            className="review-button"
            onClick={() => window.open('https://efficio-ai.vercel.app/models/way-eye')}
          >
            Review
          </button>
        </div>

      </div>
    </section>
  );
}

export default Products;
