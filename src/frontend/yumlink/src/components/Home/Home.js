import React from 'react';
import './Home.css';

const Home = ({ loggedInUserName }) => { // Receive loggedInUserName as a prop
  return (
    <div className="homeContainer">
      <h1 className="homeText">Welcome to YumLink, {loggedInUserName}!</h1>
    </div>
  );
}

export default Home;
