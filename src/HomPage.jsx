import React from 'react';
import './Login.css';
import {useHistory} from "react-router-dom";


// import SignupPage from './Sign-Up';
const HomePage = () => {

    const history = useHistory();
    const handleLogout= () => {
        history.push("/");
    }
  return (
    <>
        <div className='container'>
            <div>
              <div>
                
              </div>
            <button className="lbutton" onClick={handleLogout}>Logout</button>
                HomePage
            </div>

      </div>
    </>
  ); 
};
export default HomePage;
