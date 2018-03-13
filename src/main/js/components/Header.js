import React from "react";

export const Header = (props) => (
    <div className={"header"}>
        <header>
            <div className="headerLeft">
                <div className="logo">
                    <a href="/">WISHLIST</a>
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