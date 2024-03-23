import React from "react";
import logo from './logo.svg';
import './App.css';
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
            {!data ? "Welcome to YumLink" : data}
        </p>
        <a
          className="App-Login"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login/Sign up
        </a>
      </header>
    </div>
  );
}

export default App;
