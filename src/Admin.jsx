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
            <h1>Admin Page</h1>
                <h1 className="h1">UNDER construction</h1>
            <Link to="/">Back to Login</Link>
            <button className="lbutton" onClick={handleLogin}>back to homepage</button>
         </div>
        </>
       

    );
}
export default Admin;