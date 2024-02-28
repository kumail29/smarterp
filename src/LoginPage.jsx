import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // Initialize history outside of the component body
  const history = useHistory();

  const handleLogin = () => {
    // Simulate login logic (e.g., API call)
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      history.push('/HomePage'); // Redirect to HomePage
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='container'>

        <div>
          <div className='back'>
            <center>
              <p className='h1'>Login</p>
              <input
                className='username'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                className='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button className="lbutton" onClick={handleLogin}>Login</button>
              <br />
              <br />
              <Link to="/signup">Sign up here.</Link>
            </center>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
