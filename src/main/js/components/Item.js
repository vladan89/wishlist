import React from "react";

import MDDelete from "react-icons/lib/fa/close";
import MDCheck from "react-icons/lib/fa/check";

export class Item extends React.Component{

    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
        this.props.onItemRemove(this.props.item);
    }

    render(){
        var item = this.props.item;
        return (
            <div className={"wishlistItem"}>
                <div className="wishlistItemPhoto">
                    <img src={item.photo} alt="Item photo"/>
                </div>
                <div className={"wishlistItemData"}>
                <p className={"wishlistItemSmallRow"}>Item</p>
                <p className={"wishlistItemName"}>{item.name}</p>
                <p className={"wishlistItemSmallRow"}>Price</p>
                <p className={"wishlistItemPrice"}>{item.price} {item.currency.toUpperCase()}</p>

                    {item.note!="" && <p className={"wishlistItemSmallRow"}>Note</p>}
                    {item.note!="" && <p className={"wishlistItemNote"}>{item.note}</p>}

                <p className={"wishlistItemSmallRow"}>Actions</p>
                <button type="button" className="button greenButton " onClick={this.handleRemove}><MDCheck size={15} fill={"#ffffff"}/></button>
                <button type="button" className="button redButton " onClick={this.handleRemove}><MDDelete size={15} fill={"#ffffff"}/></button>
                </div>
            </div>
        );
    }
}