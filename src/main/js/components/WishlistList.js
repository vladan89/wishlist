import React from "react";
import {NavLink} from "react-router-dom";

import {CreateWishlistDialog} from "./CreateWishlistDialog";

export default class WishlistList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            deleteButtonVisibility: false,
            attributes: ["name"]
        };
        this.onWishlistCreate = this.onWishlistCreate.bind(this);
    }

    componentDidMount() {
        this.props.getLoggedUserId();
    }

    onWishlistCreate(newWishlist) {
        this.props.createWishlist(newWishlist);
    }

    render() {
        var wishlists = this.props.wishlist.wishlists.map(wishlist => (
            <div  key={wishlist._links.self.href} className={"sidebarLink"}>
                <NavLink activeClassName={"activeSidebarLink"} to={"/wishlists/"+ wishlist._links.self.href.split("/").pop()}>{wishlist.name}</NavLink>
            </div>)
        );
        return (
            <div>
                <p className={"sidebarTitle"}>Wishlists</p>

                {wishlists.length === 0 && <p className={"noResults"}>No Wishlists</p>}

                <div className="scrollable sidebarLink">
                    {wishlists.length>0 && wishlists}
                </div>

                <CreateWishlistDialog attributes={["name"]} purpose={"wishlist"} onWishlistCreate={this.onWishlistCreate}/>
            </div>
        )
    }
}
