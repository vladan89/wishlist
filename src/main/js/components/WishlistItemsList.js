import React from "react";
import {Item} from "./Item";

export class WishlistItemsList extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getItemsByWishlistId(this.props.id);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.id!==nextProps.id){
            this.props.getItemsByWishlistId(nextProps.id);
        }
    }

    onItemRemove(id){
        this.props.removeItem(id);
    }

    render(){
        var items = this.props.item.items.map((item, index) => <Item key={index}
                                                                     item={item}
                                                                     onItemRemove={(id)=>this.onItemRemove(item._links.self.href.split("/").pop())} /> );
        return(
            <div className={"itemsHolder"}>
                {items.length > 0 && items}
                {items.length == 0 && <p className="noItemsParagraph">There's nothing in here<br/><br/>Make a wish!</p>}
                {items.length === 0 && <div className="noItems"></div>}
            </div>
         );
    }
}