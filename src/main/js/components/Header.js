import React from "react";
import {Menu} from "./Menu";
import {NavLink} from "react-router-dom";

export const Header = (props) => (
    <div className={"header"}>
        <header>
            <div className="headerLeft">
                <div className="logo">
                    <NavLink exact to="/">WISHLIST</NavLink>
                </div>
            </div>
            <div className="headerRight">
                <nav className="menu">
                    <ul>
                        {props.loggedIn > 0 &&
                            <li>
                                <form action="/logout" method={"POST"}>
                                    <input type="submit" value={"Logout"} className={"btnAsMenuLink"}/>
                                </form>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
            <div className="clear"></div>
        </header>

    </div>
)