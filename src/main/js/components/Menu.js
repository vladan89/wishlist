import React from "react";
import {NavLink} from "react-router-dom";

export const Menu = () => (
    <div className="menu">
        <ul>
            <li><NavLink exact activeClassName="activeLink" to="/">Home</NavLink></li>
        </ul>
    </div>
);