import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterPage from './RegisterPage';
import LoginPage from '../LoginPage';
import HomePage from './HomePage';
import LandPage from '../LandingPage';
import '../LandingPage.css';




function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<LandPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
