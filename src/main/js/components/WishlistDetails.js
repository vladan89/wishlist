import React from "react";
import {CreateItemDialog} from "./CreateItemDialog";
import {Sidebar} from "./Sidebar";
import {ManageWishlistContent} from "./ManageWishlistContent";
import {WishlistItemsList} from "./WishlistItemsList";

export default class WishlistDetails extends React.Component{

    constructor(props){
        super(props);
        this.onItemCreate = this.onItemCreate.bind(this);
    }

    onItemCreate(newItem) {
        var {name, link, price, currency, photo, note} = newItem;
        var wishlist = window.location.href.split("#")[0];
        this.props.createItem({name, link, price, currency, photo, note, wishlist});
    }

    render() {
        return (
            <div className="container">

            <Sidebar wishlist={this.props.wishlist}
                     createWishlist = {this.props.createWishlist}
                     getLoggedUserId = {this.props.getLoggedUserId}
                     wishlistSearch={this.props.wishlistSearch}
                     updateWishlistSearch = {this.props.updateWishlistSearch}/>

                <div className="mainContent">

                    <ManageWishlistContent id={this.props.match.params.id}
                                           wishlist = {this.props.wishlist}
                                           getWishlistById = {this.props.getWishlistById}
                                           editWishlist = {this.props.editWishlist}
                                           removeWishlist={this.props.removeWishlist}/>

                    <CreateItemDialog item={this.props.item}
                                      getItemContent={this.props.getItemContent}
                                      onItemCreate={this.onItemCreate}/>

                    <WishlistItemsList id={this.props.match.params.id}
                                       item = {this.props.item}
                                       removeItem={this.props.removeItem}
                                       getItemsByWishlistId={this.props.getItemsByWishlistId}/>

            </div>


        </div>
        )
    }
}