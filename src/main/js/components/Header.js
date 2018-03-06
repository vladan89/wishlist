import React from "react";
import {Menu} from "./Menu";

export const Header = () => (
    <div className={"header"}>
        <header>
            <div className="headerLeft">
                <div className="logo">
                    <a href="/"><img src="/img/logo.png" alt="Home"/></a>
                </div>
            </div>
            <div className="headerRight">
                <Menu />
            </div>
            <div className="clear"></div>
        </header>

    </div>
)