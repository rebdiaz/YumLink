import React from "react";
import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import axios from "axios";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
          <script>
          </script>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {!data ? "Loading..." : data}
        </p>
        <div>
          <LoginButton />
          <SignUpButton />
        </div>
        <a
          className="App-Login"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
