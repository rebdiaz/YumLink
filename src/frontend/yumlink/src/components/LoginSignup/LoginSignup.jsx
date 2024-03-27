import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import axios from "axios";

//REFERENCE: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtoimplementthebackend
const LoginSignup = () => {
    const history = useHistory();
    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleActionChange = (newAction) => {
        if (newAction === action) {
            if (isValidForm()) {
                history.push("/home");
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

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3001/signup",
                {password: password, username: email, name: name},
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                console.log("User added");
                console.log(message);
                history.push("/home");
                // setTimeout(() => {
                //     navigate("/");
                // }, 1000);
            } else {
                console.log("Error adding user!")
                console.log(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3001/login",
                {username: email, password: password},
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                console.log("Logged in!");
                console.log(message);
                history.push("/home");
                // setTimeout(() => {
                //     navigate("/");
                // }, 1000);
            } else {
                console.log("Error logging in!")
                console.log(message);
            }
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
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email Address" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>

            </div>
            {action === "Sign Up" ? null : (
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            )}
            <div className="submit-container">

                <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignup}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>

            </div>
        </div>
    );
}

export default LoginSignup;
