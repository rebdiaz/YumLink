import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // Import BrowserRouter, Route, Switch, and Redirect
import LoginSignup from './components/LoginSignup/LoginSignup'; 
import Home from './components/Home/Home'; 
import NavBar from './components/Navbar';
import Listings from './components/Listings/LIstings';
import ListingPopUp from './components/ListingPopUp/ListingPopUp'
import View from './components/View/View'

const App = () => {

  //Configure background image:
  const appStyle = {
    backgroundImage: `url("https://t3.ftcdn.net/jpg/06/29/73/36/360_F_629733635_4eo0wfZfYC6u1IKn3Fb3uFMWQD87n6DD.jpg")`, // Set background image URL here
    backgroundSize: 'cover', // Ensure the background image covers the entire container
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  //Define routes for the application:
  return (
    <Router>
      <div style={appStyle}>
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
      </div>
    </Router>
  );
}

export default App;
