import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import axios from "axios";

//reference for using local storage: https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

const LoginSignup = () => {
    const history = useHistory();
    const [action, setAction] = useState("Sign Up");
    // States to hold user's sign up information
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // State to store logged-in user's name
    const [loggedInUserName, setLoggedInUserName] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    //Function handles login or signup button clicks
    const handleActionChange = (newAction) => {
        if (newAction === action) {
            // If the form is valid, perform the corresponding action
            if (isValidForm()) {
                if (action === "Sign Up") {
                    handleSignup();
                } else {
                    handleLogin();
                }
            }
        } else {
            setAction(newAction);
        }
    };

    const isValidForm = () => {
        if (action === "Login") {
            return email.trim() !== "" && password.trim() !== "";
        } else {
            return name.trim() !== "" && email.trim() !== "" && password.trim() !== "";
        }
    };

    //Function sends user input login credentials and verifies them with post request
    const handleSignup = async () => {
        try {
            const { data } = await axios.post(
                "http://localhost:3000/signup",
                { password: password, username: email, name: name },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                console.log(message);
                localStorage.setItem("loggedInUserName", name);
                history.push("/home");
            } else {
                //console.log("Error adding user!")
                console.log(message);
            }
            setStatusMessage(message);
        } catch (error) {
            console.log(error);
        }
    };

    //Function sends user input from signup page, creating new user entry in db
    //User then logged in and home screen displayed
    const handleLogin = async () => {
        try {
            const { data } = await axios.post(
                "http://localhost:3000/login",
                { username: email, password: password },
                { withCredentials: true }
            );
            // API returns the user's name
            const { success, message, name } = data;
            if (success) {
                console.log("Logged in!");
                console.log(message);
                // Store logged-in user's name in local storage to display personalized welcome msg
                setLoggedInUserName(name);
                localStorage.setItem("loggedInUserName", name);
                history.push("/home");
            } else {
                console.log("Error logging in!")
                console.log(message);
            }
            setStatusMessage(message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            {/* Display name field if signing up */}
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                )}
                {/* Input field for email */}
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {/* Input field for password */}
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {/* Forgot password displayed if logging in */}
            {action === "Sign Up" ? null : (
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            )}
            <div className="status-message">{statusMessage}</div>
            {/* Sign up and login buttons */}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => handleActionChange("Sign Up")}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => handleActionChange("Login")}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
