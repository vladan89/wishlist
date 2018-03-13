import React from "react";
import {Sidebar} from "./Sidebar";

export const Home = (props) => (
    <div className="container">
        <Sidebar wishlist={props.wishlist}
                 getLoggedUserId={props.getLoggedUserId}
                 removeWishlist={props.removeWishlist}
                 createWishlist = {props.createWishlist}
                 wishlistSearch={props.wishlistSearch}
                 updateWishlistSearch = {props.updateWishlistSearch}/>
        <div className="mainContent">
            Content
        </div>

    </div>
);