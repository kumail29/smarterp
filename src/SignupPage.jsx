import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


// import SignupPage from './Sign-Up';
const SignupPage = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push('/');
  }

  return (
    <div className='container'>
      <button className='lbutton' onClick={handleLogin}>Login</button>
          

      </div>
  ); 
};
export default SignupPage;
