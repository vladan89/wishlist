import React from "react";
import ReactDOM from "react-dom";

import MDCreate from "react-icons/lib/fa/plus";

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
                <input type="text" placeholder={attribute} ref={attribute} className="field" />
            </p>
        );
        return (
            <div>
                <a href="#createDialog" className={"createDialogLink"}>
                    <span className={"actionLink"}>Create {this.props.purpose}</span>
                </a>

                <div id="createDialog" className="modalDialog">
                    <div className={"smallForm"}>
                        <a href="#" title="Close" className="close">X</a>

                        <p className="dialogTitle blue">Create new {this.props.purpose}</p>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit} className="blueButton modalButton blue">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};