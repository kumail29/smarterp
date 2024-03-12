import React from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import './HomePage.css'


// import SignupPage from './Sign-Up';
const HomePage = () => {

    const history = useHistory();
    const handleLogout= () => {
        history.push("/");
    }
  return (
    <>
        <div className='container'>
        <div className='logout'><button className="lbutton" onClick={handleLogout}>Logout</button></div>
            <div>
            
              <div className='backhome'>
              <div class="input-name">
              <div class="module">
                <span class="icon material-icons">supervisor_account</span>
                <Link to="/admin"><span class="module-name">Admin</span></Link>  
              </div>
              <div class="module">
                <span class="icon material-icons">account_box</span>
                <Link to="/crm"><span class="module-name">CRM</span></Link> 
              </div>
              <div class="module">
                <span class="icon material-icons">people</span>
                <Link to="/employee"><span class="module-name">Employee</span></Link> 
              </div>
              <div class="module">
                <span class="icon material-icons">assessment</span>
                <Link to="/report"><span class="module-name">Report</span></Link> 
              </div>
              <div class="module">
                <span class="icon material-icons">description</span>
                <Link to="/invoice"><span class="module-name">Invoice</span></Link> 
            </div>
            </div>
    </div>
    </div>
    </div>
    
    </>
  ); 
};
export default HomePage;
