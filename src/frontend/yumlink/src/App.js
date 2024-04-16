import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // Import BrowserRouter, Route, Switch, and Redirect
import LoginSignup from './components/LoginSignup/LoginSignup'; 
import Home from './components/Home/Home'; 
import NavBar from './components/Navbar';
import Listings from './components/Listings/LIstings';
import ListingPopUp from './components/ListingPopUp/ListingPopUp'
import View from './components/View/View'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/listings" exact component={Listings} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={LoginSignup} />
        <Route path="/create" component={ListingPopUp} />
        <Route path="/view" component={View} />
        {/* Define a Route for the login page */}
        <Route path="/" exact>
          {/* Render the login page component */}
          <Redirect to="/login" /> {/* Redirect to the login page */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
