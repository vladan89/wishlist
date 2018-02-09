import React from "react";
const client = require('../client');
import {NavLink} from "react-router-dom";

export default class Wishlists extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            wishlists: []
        };
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

    render() {
        var wishlists = this.state.wishlists.map(wishlist => (
            <div  key={wishlist._links.self.href} >
                <NavLink className={"wishlistLink"} to={"/wishlists/"+ wishlist._links.self.href.split("/").pop()}>{wishlist.name}</NavLink>
                <button type="button" className="deleteButton" onClick={()=>this.onWishlistRemove(wishlist)}>Remove</button>
            </div>)
        );
        return (
            <div>
                {wishlists}
            </div>
        )
    }
}
