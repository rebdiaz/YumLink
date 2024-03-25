// import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import LoginButton from './LoginButton';
// import SignUpButton from './SignUpButton';
// import axios from "axios";
// import NavBar from "./components/Navbar";
// import LoginSignup from "./components/LoginSignup/LoginSignup"

// function App() {
//   return (
//     <div className="App">
//       <LoginSignup>
        
//       </LoginSignup>
      
//     </div>
//   );
// }

// export default App;

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
        <Route path="/login" component={LoginSignup} /> {/* Route for LoginSignup component */}
        <Route path="/home" component={Home} /> {/* Route for Home component */}
      </Switch>
    </Router>
  );
}

export default App;
