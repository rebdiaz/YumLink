import React from "react";
import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import axios, {post} from "axios";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

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
