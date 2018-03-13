import React from "react";
import ReactDOM from "react-dom";

import MDCreateWishlist from "react-icons/lib/md/playlist-add";

export class CreateWishlistDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var newWishlist = {};
        this.props.attributes.forEach(attribute => {
            newWishlist[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onWishlistCreate(newWishlist);
        this.props.attributes.forEach(attribute => {
            ReactDOM.findDOMNode(this.refs[attribute]).value = ''; // clear out the dialog's inputs
        });
        window.location = "#";
    }

    render() {
        var inputs = this.props.attributes.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={"Enter "+attribute} ref={attribute} className="materialInput" />
            </p>
        );
        return (
            <div>
                <a href="#createWishlistDialog" className={"linkWithIcon"}>
                    <MDCreateWishlist fill={"#808082"} size={25} className={"icon"}/> Create wishlist
                </a>
                <div id="createWishlistDialog" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <p className="dialogTitle blue">Create new {this.props.purpose}</p>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit} className={"linkWithIcon modalButton"}>
                                <MDCreateWishlist fill={"#808082"} size={25} className={"icon"}/> Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};