import React, {useEffect, useState} from 'react';
import './Home.css';

const Home = () => {
    const [loggedInUserName, setLoggedInUserName] = useState("");
    useEffect(() => {
        const storedUserName = localStorage.getItem("loggedInUserName");
        if(storedUserName) {
            setLoggedInUserName(storedUserName);
        }
        }, []);
  return (
    <div className="homeContainer">
      <h1 className="homeText">Welcome to YumLink {loggedInUserName}!</h1>
    </div>
  );
}

export default Home;
