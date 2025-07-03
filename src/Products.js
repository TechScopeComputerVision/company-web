import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();

  return (
    <section className="products">
      <h3>🔥 Featured Models</h3>
      <div className="product-grid">

        {/* AutoCAD Summarizer Card */}
        <div className="product-card">
          <h4>📐 AutoCAD Drawings Summarizer</h4>
          <p>
            AI-powered model that reads AutoCAD drawings and extracts details like number of traffic 
            signs, road measurements, and structural insights — all automatically. 
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

        {/* Hair Loss Classifier Card */}
        <div className="product-card">
          <h4>🧑‍🦲 Hair Loss Classifier</h4>
          <p>
            Deep learning model built with ResNet-18 to detect baldness from face images. 
            Achieves <strong>over 85% accuracy</strong> with <strong>low prediction variance</strong> across 12K+ labeled samples. 
            Seamlessly deployable in web apps via ONNX for fast and reliable inference.
          </p>
          <button
            className="review-button"
            onClick={() => window.open('https://efficio-ai.vercel.app/models/hair-loss')}
          >
            Review
          </button>
        </div>

      </div>
    </section>
  );
}

export default Products;
