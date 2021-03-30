import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import Offer from './components/Offer';
import Signup from './components/User/Signup';
import Signin from './components/User/Signin';
import Deals from'./components/Deals';
const Routes=()=> {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/offer" component={Offer}/>
                <Route exact path="/Signup" component={Signup}/>
                <Route exact path="/Signin" component={Signin}/>
                <Route exact path="/deals" component={Deals}/>
            </Switch>
        </Router>
    )
}

export default Routes
