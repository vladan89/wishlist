import React from "react";
const client = require('../client');
import {NavLink} from "react-router-dom";
import {CreateDialog} from "./CreateDialog";

import MDDelete from "react-icons/lib/fa/close";

export default class WishlistList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            wishlists: [],
            attributes: ["name"]
        };
        this.onWishlistCreate = this.onWishlistCreate.bind(this);
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/wishlists'}).done(response => {
            this.setState({wishlists: response.entity._embedded.wishlists});
        });
    }

    onWishlistRemove(wishlist){
        client({method: 'DELETE', path: wishlist._links.self.href}).done(response => {
            var updatedWishlist = this.state.wishlists.filter(current => current._links.self.href !== wishlist._links.self.href );
            this.setState({wishlists : updatedWishlist});
        });
    }

    onWishlistCreate(newWishlist) {
        return client({
            method: 'POST',
            path: "/api/wishlists",
            entity: newWishlist,
            headers: {'Content-Type': 'application/json'}
        }).done( response => {
            this.setState({
               wishlists: [...this.state.wishlists, {user: response.entity.user, name: newWishlist.name, _links: response.entity._links}]
            });
        });
    }

    render() {
        var wishlists = this.state.wishlists.map(wishlist => (
            <div  key={wishlist._links.self.href} >
                <button type="button" className="button redButton" onClick={()=>this.onWishlistRemove(wishlist)}>
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
