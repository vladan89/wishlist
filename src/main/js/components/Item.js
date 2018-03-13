import React from "react";
import MDRemove from "react-icons/lib/md/delete";

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
                <p className={"wishlistItemSmallRow"}>Link</p>
                <p className={"wishlistItemLink"}><a href={item.link} target={"_blank"}>{item.link}</a></p>
                <button onClick={this.handleRemove} className={"linkWithIcon noBackgroundBtn"}>
                    <MDRemove fill={"#808082"} size={20} className={"icon"}/> Remove from wishlist
                </button>
                </div>
            </div>
        );
    }
}