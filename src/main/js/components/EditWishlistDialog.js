import React from "react";
import ReactDOM from "react-dom";

import MDUpdateWishlist from "react-icons/lib/md/update";

export class EditWishlistDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var updatedWishlist = {};
        updatedWishlist["name"] = this.name.value;
        if(updatedWishlist.name.trim()!="") {
            this.props.editWishlist(this.props.id, updatedWishlist);
            this.name.value = '';
            window.location = "#";
        }
        else alert("Wishlist name can not be blank.");
    }

    render() {
        return (
            <div className={"inlineBlock"}>
                <a href="#editWishlistDialog" className={"linkWithIcon"}>
                    <MDUpdateWishlist fill={"#808082"} size={20} className={"icon"}/> Edit wishlist
                </a>
                <div id="editWishlistDialog" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <p className="dialogTitle blue"> Edit wishlist </p>

                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="materialInput"
                                   placeholder={"Enter new name"}
                                   ref={(name) => this.name = name}
                                   name = {"name"} />
                            <button type="submit" className={"linkWithIcon modalButton"}>
                                <MDUpdateWishlist fill={"#808082"} size={20} className={"icon"}/> Edit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};