import React from "react";
import {NavLink} from "react-router-dom";

export const Menu = () => (
    <div id="menu">
        <img id="menu-icon" src="/img/grid.png" alt="Grid Image"/>
        <nav className="menu-list">
            <span>Menu</span>
            <ul>
                {location.pathname.substring(0,6) !== "/login" &&
                    <div>
                        <li><NavLink exact activeClassName="activeLink" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to="/wishlists">Wishlists</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to="/user/profile">Profile</NavLink></li>
                        <li>
                            <form action="/logout" method={"POST"}>
                                <input type="submit" value={"LOGOUT"} className={"btnAsMenuLink"}/>
                            </form>
                        </li>
                    </div>
                }
                {location.pathname.substring(0,6) === "/login" &&
                    <div>
                        <li><NavLink activeClassName="activeLink" to="/login">Login</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to="/register">Register</NavLink></li>
                        <li><NavLink activeClassName="activeLink"  to="/about">About</NavLink></li>
                    </div>
                }
            </ul>
        </nav>
    </div>
);