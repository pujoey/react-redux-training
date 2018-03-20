import React from 'react';
import { Route } from "react-router-dom";

import TodoList from "./components/todo/TodoList";
import Calc from "./components/calc/Calc";
import Chat from "./components/chat/Chat";
import { withRouter, withSidenav } from './containers'; 

export const Routes = (props) => (
    <div>
        <Route exact path='/' component={TodoList} />
        <Route path='/calc' component={Calc} />
        <Route path='/chat' component={Chat} />
    </div>
);

export default withRouter(withSidenav(Routes));