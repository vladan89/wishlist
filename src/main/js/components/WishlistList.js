import React from "react";
import {NavLink} from "react-router-dom";
import {CreateDialog} from "./CreateDialog";

import MDDelete from "react-icons/lib/fa/close";

export default class WishlistList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            attributes: ["name"]
        };
        this.onWishlistCreate = this.onWishlistCreate.bind(this);
    }

    componentDidMount() {
        this.props.getLoggedUserId();
    }

    onWishlistRemove(id){
        this.props.removeWishlist(id);
    }

    onWishlistCreate(newWishlist) {
        this.props.createWishlist(newWishlist);
    }

    render() {
        var wishlists = this.props.wishlist.wishlists.map(wishlist => (
            <div  key={wishlist._links.self.href} >
                <button type="button" className="button redButton" onClick={(id)=>this.onWishlistRemove(wishlist._links.self.href.split("/").pop())}>
                    <MDDelete size={15} fill={"#ffffff"}/>
                </button>
                <NavLink className={"wishlistLink middleHeightLink"} to={"/wishlists/"+ wishlist._links.self.href.split("/").pop()}>{wishlist.name}</NavLink>
            </div>)
        );
        return (
            <div>
                <CreateDialog attributes={this.state.attributes} purpose={"wishlist"} onWishlistCreate={this.onWishlistCreate}/>
                {wishlists.length === 0 ? "No wishlists" : wishlists}
            </div>
        )
    }
}
