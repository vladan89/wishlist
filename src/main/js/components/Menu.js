import React from "react";
import {NavLink} from "react-router-dom";

export default class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <ul>
                    <li><NavLink exact activeClassName="activeLink" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activeLink" to="/other">Other</NavLink></li>
                </ul>
            </div>
        );
    }
}