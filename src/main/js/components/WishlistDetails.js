import React from "react";
import {Item} from "./Item";
import {CreateItemDialog} from "./CreateItemDialog";

export default class WishlistDetails extends React.Component{

    constructor(props){
        super(props);
        this.onItemCreate = this.onItemCreate.bind(this);
    }

    componentDidMount(){
        this.props.getItemsByWishlistId(this.props.match.params.id);
    }

    onItemRemove(id){
        this.props.removeItem(id);
    }

    onItemCreate(newItem) {
        var {name, link, price, currency, photo, note} = newItem;
        var wishlist = window.location.href.split("#")[0];
        this.props.createItem({name, link, price, currency, photo, note, wishlist});
    }

    render() {
        var items = this.props.item.items.map((item, index) => <Item key={index} onItemRemove={(id)=>this.onItemRemove(item._links.self.href.split("/").pop())} item={item} /> );
        return (
            <div>
                <CreateItemDialog item={this.props.item} getItemContent={this.props.getItemContent} onItemCreate={this.onItemCreate}/>
                {items.length === 0 ? "No items in this wishlist" : items}
            </div>
        )
    }
}