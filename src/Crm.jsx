import React from "react";
import {Link,useHistory} from 'react-router-dom/cjs/react-router-dom.min';
const Crm = () =>  {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/HomePage'); // Redirect to HomePage
    };
    return(
        <>
         <div>
            <button className="lbutton"  onClick={handleLogin}>Homepage</button>
            crm
            UNDER construction
            <Link to="/homepage">Back to Homepage</Link>

         </div>
        </>
       

    );
}
export default Crm;