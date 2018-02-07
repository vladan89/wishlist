import React from "react";
import {Wishlist} from "./Wishlist";

export default class Wishlists extends React.Component{
    render() {
        var wishlists = this.props.wishlists.map(wishlist =>
            <Wishlist key={wishlist._links.self.href} wishlist={wishlist}/>
        );
        return (
            <div>
                {wishlists}
            </div>
        )
    }
}
