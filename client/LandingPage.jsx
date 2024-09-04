import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
const LandPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing features and content</p>
        <Link to="/signup">Get Started</Link>
      </header>
    </div>
  );
};

export default LandPage;