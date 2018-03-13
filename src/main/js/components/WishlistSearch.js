import React from "react";
import {NavLink} from "react-router-dom";

export class WishlistSearch extends React.Component{

    render(){
        var filteredWishlists = this.props.wishlist.wishlists.filter((wishlist) => this.props.wishlistSearch.length >= 2 ? wishlist.name.toLowerCase().indexOf(this.props.wishlistSearch.toLowerCase())!== -1: "");
        var wishlists = filteredWishlists.map(wishlist => (
            <div  key={wishlist._links.self.href} className={"sidebarLink"}>
                <NavLink activeClassName={"activeSidebarLink"} to={"/wishlists/"+ wishlist._links.self.href.split("/").pop()}>{wishlist.name}</NavLink>
            </div>)
        );
        return (
            <div>
                <p className="sidebarTitle">Search</p>
                <input type="text" className={"materialInput"}
                       placeholder={"Search for wishlist"}
                       defaultValue={this.props.wishlistSearch}
                       onChange={(e)=>this.props.updateWishlistSearch(e)}/>
                {(wishlists.length === 0 && this.props.wishlistSearch.length > 2) && <p className={"noResults"}>No such wishlists</p>}
                <div className="scrollable sidebarLink">
                    {wishlists.length>0 && wishlists}
                </div>
            </div>
        );
    }
};
