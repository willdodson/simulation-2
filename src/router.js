import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Wizard1 from './components/Wizard1';


export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/wizard1" component={Wizard1} />
    </Switch>
)