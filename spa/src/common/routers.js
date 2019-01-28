import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Container from './container';
import Login from  './pages/login/login';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Container}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </BrowserRouter>
)
export default routes;