import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
// Import other pages

import Navbar from './components/Navbar'; // Assuming Navbar is a component
import Footer from './components/Footer'; // Assuming Footer is a component

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/events" component={Events} />
        {/* Define other routes */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;