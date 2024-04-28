import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'; // Assuming you have a Footer component
import HomePage from './pages/home.js';
import AboutUsPage from './pages/AboutUs.js';
import AuthorsSpotlightPage from './pages/AuthorsSpotlightPage.js';
import BlogsPage from './pages/BlogsPage.js';
import BookClubsPage from './pages/BookClubsPage.js';
import ContestsPage from './pages/ContestsPage.js';
import ForumsPage from './pages/ForumsPage.js';
import ResourcesPage from './pages/ResourcesPage.js';
import SignupPage from './pages/SignupPage.js';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/App.css';

function App() {
  return (
    <Router> {/* Wrap the Routes component with Router */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/book-clubs" element={<BookClubsPage />} />
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/authors-spotlight" element={<AuthorsSpotlightPage />} />
          <Route path="/forums" element={<ForumsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;