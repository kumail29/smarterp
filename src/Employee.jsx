import React from "react";
import {Link,useHistory} from 'react-router-dom/cjs/react-router-dom.min';
const Admin = () =>  {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/HomePage'); // Redirect to HomePage
    };
    return(
        <>
         <div>
            <center>
            <h1>employee</h1>
            <h1>UNDER construction</h1>
            <button className="lbutton"  onClick={handleLogin}>Homepage</button>
            </center>

            <Link to="/homepage">Back to homepage</Link>

         </div>
        </>
       

    );
}
export default Admin;