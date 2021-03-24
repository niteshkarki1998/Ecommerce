import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Offer from './components/Offer';
import Signup from './components/User/Signup';
import Signin from './components/User/Signin';

const Routes=()=> {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/offer" component={Offer}/>
                <Route exact path="/Signup" component={Signup}/>
                <Route exact path="/Signin" component={Signin}/>
            </Switch>
        </Router>
    )
}

export default Routes
