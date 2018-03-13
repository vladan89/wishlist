import React from "react";
import WishlistList from "./WishlistList";
import {WishlistSearch} from "./WishlistSearch";

export const Sidebar = (props) => (
    <div className="sidebar">
        <WishlistSearch wishlist={props.wishlist}
                        wishlistSearch={props.wishlist.search}
                        updateWishlistSearch = {props.updateWishlistSearch} />
        <WishlistList wishlist={props.wishlist}
                      getLoggedUserId = {props.getLoggedUserId}
                      createWishlist={props.createWishlist}/>
    </div>
);