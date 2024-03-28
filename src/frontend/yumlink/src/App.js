    //React.useEffect(() => {
    //    fetch("/api")
    //        .then((res) => res.json())
    //        .then((data) => setData(data.message));
    //}, []);

    // const { data1 } = axios.post(
    //     "http://localhost:3001/signup",
    //     {password: 'myPass223666667', username: 'user1234', name: 'Rebecca'},
    //     { withCredentials: true }
    // );
    //
    // const { data2 } = axios.post(
    //     "http://localhost:3001/login",
    //     {username: 'user1234', password: 'myPass223666667'},
    //     { withCredentials: true }
    // )
    //     .then(response => {console.log(response.data)}
    //     );

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route
import LoginSignup from './components/LoginSignup/LoginSignup'; 
import Home from './components/Home/Home'; 
import NavBar from './components/Navbar';
import Listings from './components/Listings/LIstings';

const App = () => {

  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
      <Route path="/listings" exact component={Listings} />
        <Route path="/home" component={Home} /> {/* Route for Home component */}
        <Route path="/login" component={LoginSignup} /> {/* Route for LoginSignup component */}
      </Switch>
    </Router>
  );
}

export default App;