import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomPage";

const App = () =>{
    return (
        <>
        <Switch>
            <Route  exact path='/' component={LoginPage} /> 
            <Route path="/signup" component={SignupPage}/>
            <Route  path="/homepage" component={HomePage} /> 

        </Switch>

        </>

    )
}
export default App;