import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import LoginSignup from './components/LoginSignup/LoginSignup'; 
import Home from './components/Home/Home'; 
import NavBar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home" component={Home} /> {/* Route for Home component */}
        <Route path="/login" component={LoginSignup} /> {/* Route for LoginSignup component */}
      </Switch>
    </Router>
  );
}

export default App;