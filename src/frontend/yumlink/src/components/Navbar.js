import { Component } from "react";
import "./NavbarStyles.css";

// Import your logo PNG file
import logoImage from './Assets/yumlink logo.png';

class NavBar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="navbar">
                {/* Use the imported logo image */}
                <a href='index.html' className="navbar__link">
                    <img src={logoImage} alt="Logo" className="logo" style={{ width: "70px", height: "70px" }} />
                </a>

                <div>
                    <ul id="navbar">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/listings">Menu</a></li>
                        <li><a href="/create">Create Listing</a></li>
                        <li><a href="/login">Login/SignUp</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i
                        id="bar"
                        // className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}
                    ></i>
                </div>
            </nav>
        );
    }
}

export default NavBar;
