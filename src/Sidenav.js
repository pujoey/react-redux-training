import React from 'react';
import { NavLink } from "react-router-dom";

const SideNav = props => (
    <div className="">
        <section>
            <ul>
                <li><NavLink to='/'></NavLink>Todo</li>
                <li><NavLink to='/calc'>Calc</NavLink></li>
                <li><NavLink to='/chat'>Chat</NavLink></li>
            </ul>
        </section>
    </div>
);

export default SideNav;