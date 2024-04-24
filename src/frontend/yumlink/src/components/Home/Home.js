import React, {useEffect, useState} from 'react';
import './Home.css';

//reference for using local storage: https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

const Home = () => {
    //retrieve the logged-in user's name
    const [loggedInUserName, setLoggedInUserName] = useState("");
    useEffect(() => {
        const storedUserName = localStorage.getItem("loggedInUserName");
        if(storedUserName) {
            setLoggedInUserName(storedUserName);
        }
        }, []);

  //display personalized welcome message on home screen:
  return (
    <div className="homeContainer">
      <h1 className="homeText">Welcome to YumLink {loggedInUserName}!</h1>
    </div>
  );
}

export default Home;
