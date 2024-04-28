import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'; // Assuming you have a Footer component
import HomePage from './pages/home.js';
import AboutUsPage from './pages/AboutUs.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;