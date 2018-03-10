import React from "react";
import WishlistList from "./WishlistList";

export const Sidebar = (props) => (
    <div className="sidebar">
        <p className={"sidebarTitle"}>Wishlists</p>
        <WishlistList wishlist={props.wishlist}
                      getLoggedUserId = {props.getLoggedUserId}
                      createWishlist={props.createWishlist}/>
    </div>
);