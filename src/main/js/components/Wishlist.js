import React from "react";
import {NavLink} from "react-router-dom";

export class Wishlist extends React.Component{
    render() {
        var id = this.props.wishlist._links.self.href.split("/").pop();
        return (
            <div><NavLink className={"wishlistLink"} to={"/wishlists/"+id}>{this.props.wishlist.name}</NavLink></div>
        )
    }
}