import React from "react";
const client = require('../client');
import {Item} from "./Item";

export default class Wishlist extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : []
        }

        this.onItemRemove = this.onItemRemove.bind(this);
    }



    componentDidMount(){
        var id = this.props.match.params.id;
        client({method: 'GET', path: '/api/wishlists/'+id+'/items'}).done(response => {
            this.setState({items: response.entity._embedded.items});
        });
    }

    onItemRemove(item){
        client({method: 'DELETE', path: item._links.self.href}).done(response => {
            var updatedItems = this.state.items.filter(current => current._links.self.href !== item._links.self.href );
            this.setState({items : updatedItems});
        });
    }

    render() {
        var items = this.state.items.map(item => <Item key={item._links.self.href} onItemRemove={this.onItemRemove} item={item} /> );
        return (
            <div>
                <table className="wishlistItemsTable">
                    <thead>
                    <tr className="wishlistItemsHeader">
                        <th>Thumbnail</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Note</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{items.length === 0 ? "No items in this wishlist" : items}</tbody>
                </table>
            </div>
        )
    }
}