import React from "react";
import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import axios, {post} from "axios";

const myUsername = 'user1234';
const myPassword = 'myPass223666667';

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    const { data1 } = axios.post(
        "http://localhost:3001/signup",
        {password: myPassword, username: myUsername},
        { withCredentials: true }
    );

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
