import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import AboutUsPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactUsPage from './pages/ContactUs';
import PortfolioPage from './pages/Portfolio';
import Layout from './layouts/Layout';
// import NotFoundPage from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}
