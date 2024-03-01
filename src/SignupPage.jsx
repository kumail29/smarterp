import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './SignUp.css';

// import SignupPage from './Sign-Up';
const SignupPage = () => {
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [lasttname, setlastname] = useState('');
  const [firstname, setfirstname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleSignup = () => {
    history.push('/');
  }

  return (
    <div className='container'>
      <div className='backsignup'>
      <p className='h1'>Sign Up</p>
      <div class="input-group">
      <input
        className='username'
        type="text"
        placeholder="First name"
        value={firstname}
        onChange={(e) => setfirstname(e.target.value)}
      />
      <i class="fas fa-user"/>
      <br />
      <input
        className='username'
        type="text"
        placeholder="Last name"
        value={lasttname}
        onChange={(e) => setlastname(e.target.value)}
      />
      <i class="fas fa-user"/>
      <br />
      <input
        className='username'
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <i class="fas fa-phone"/>
      <br />

      <input
        className='username'
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <i class="fas fa-envelope"/>
      <br />
      
      <input
        className='username'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <i class="fas fa-user"/>
      <br />
      <input
        className='password'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <i class="fas fa-lock"/>
        </div>
      <br />
      <button className="lbutton" onClick={handleSignup}>Sign Up</button>
      <br />
      <Link to="/">Already Have an Account? Login</Link>
      </div>
      </div>
  ); 
};
export default SignupPage;
