import React from "react";

import MDCreateWishlist from "react-icons/lib/md/playlist-add";

export class CreateWishlistDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var newWishlist = {};
        newWishlist["name"] = this.name.value.trim();
        if(newWishlist.name!=""){
            this.props.onWishlistCreate(newWishlist);
            this.name.value="";
            window.location="#";
        } else alert("Wishlist name can not be blank!");
    }

    render() {
        return (
            <div>
                <a href="#createWishlistDialog" className={"linkWithIcon"}>
                    <MDCreateWishlist fill={"#808082"} size={25} className={"icon"}/> Create wishlist
                </a>
                <div id="createWishlistDialog" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <p className="dialogTitle blue">Create new {this.props.purpose}</p>

                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Enter wishlist name" ref={ (name) => this.name = name} className="materialInput" />
                            <button type={"submit"} className={"linkWithIcon modalButton"}>
                                <MDCreateWishlist fill={"#808082"} size={25} className={"icon"}/> Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};