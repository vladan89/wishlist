import React from "react";

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
            <tr className="wishlistItem">
                <td className="wishlistItemPhoto">
                    <img src="https://static.tehnomanija.rs/UserFiles/protected_products/77559.jpg" alt="Item photo"/>
                </td>
                <td className="wishlistItemName">{item.name}</td>
                <td className="wishlistItemPrice">{item.price} {item.currency.toUpperCase()}</td>
                <td className="wishlistItemNote">{item.note}</td>

                <td className="wishlistItemButton"><button type="button" className="deleteButton" onClick={this.handleRemove}>Remove</button></td>
            </tr>
        );
    }
}