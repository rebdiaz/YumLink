import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // Import BrowserRouter, Route, Switch, and Redirect
import LoginSignup from './components/LoginSignup/LoginSignup'; 
import Home from './components/Home/Home'; 
import NavBar from './components/Navbar';
import Listings from './components/Listings/LIstings';
//import axios from "axios";
import ListingPopUp from './components/ListingPopUp/ListingPopUp'

import View from './components/View/View'


const App = () => {
    // const { data1 } = axios.post(
    //     "http://localhost:3001/createlisting",
    //     {title: 'Chocolate Chip Cookies', pricePerUnit: 1.00, units: 10, breakfast: false, lunch: false, dinner: false, dessert: true, beverage: false, snack: true,
    //         vegetarian: true, vegan: false, other: '', cuisine: 'American', dairyAllergy: true, glutenAllergy: true, shellfishAllergy: false,
    //         nutAllergy: false, soyAllergy: false, fishAllergy: false, otherAllergy: ''},
    //     { withCredentials: true }
    // );
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
