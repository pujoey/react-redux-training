import React, { Component } from 'react';
import { Route } from "react-router-dom";

import TodoList from "./TodoList";
import Calc from "./Calc";
import { withRouter, withSideNav } from './containers'; 

export const Routes = (props) => {
    <div>
        <Route exact path='/' component={TodoList} />
        <Route path='/calc' component={Calc} />
    </div>
};

export default withRouter(withSideNav(Routes));