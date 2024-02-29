import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomPage";
import Admin from "./Admin";
import Crm from "./Crm";
import Employee from "./Employee";
import Invoice from "./Invoice";
import Report from "./Report";

const App = () =>{
    return (
        <>
        <Switch>
            <Route  exact path='/' component={LoginPage} /> 
            <Route path="/signup" component={SignupPage}/>
            <Route  path="/homepage" component={HomePage} />
            <Route path='/admin' component={Admin} />
            <Route path='/crm' component={Crm} />
            <Route path='/employee' component={Employee} />
            <Route path='/invoice' component={Invoice} />
            <Route path='/report' component={Report} />
        </Switch>

        </>

    )
}
export default App;