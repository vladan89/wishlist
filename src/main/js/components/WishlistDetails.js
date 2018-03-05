import React from "react";
const client = require('../client');
import {Item} from "./Item";
import {CreateDialog} from "./CreateDialog";
import {CreateItemDialog} from "./CreateItemDialog";

export default class WishlistDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
            attributes: ["link"]
        }

        this.onItemRemove = this.onItemRemove.bind(this);
        this.onItemCreate = this.onItemCreate.bind(this);
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

    onItemCreate(newItem) {
        var {name, link, price, currency, photo, note} = newItem;
        var wishlist = window.location.href.split("#")[0];
        return client({
            method: 'POST',
            path: "/api/items",
            entity: {name, link, price, currency, photo, note, wishlist},
            headers: {'Content-Type': 'application/json'}
        }).done( response => {
            this.setState({
                items: [...this.state.items,
                        {
                            user: response.entity.user,
                            name, link, price, currency, photo, note, wishlist,
                            _links: response.entity._links
                        }
                    ]
            });
        });
    }

    render() {
        var items = this.state.items.map((item, index) => <Item key={index} onItemRemove={this.onItemRemove} item={item} /> );
        return (
            <div>
                <CreateItemDialog attributes={this.state.attributes} purpose={"item"} onItemCreate={this.onItemCreate}/>
                {items.length === 0 ? "No items in this wishlist" : items}
            </div>
        )
    }
}