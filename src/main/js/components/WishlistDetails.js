import React from "react";
const client = require('../client');
import {Item} from "./Item";
import {CreateDialog} from "./CreateDialog";

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
        var wishlistId = +this.props.match.params.id;
        return client({
            method: 'POST',
            path: "/api/wishlists/"+wishlistId+"/items",
            entity: newItem,
            headers: {'Content-Type': 'application/json'}
        }).done( response => {
            console.log("Created");
            console.log(response.entity);
            console.log(response.entity._links);

            this.setState({
                items: [...this.state.items,
                        {
                            user: response.entity.user,
                            _links: response.entity._links,
                            link:newItem.link,
                            name: "New Item!",
                            price:550,
                            photo: "https://static.tehnomanija.rs/UserFiles/protected_products/77559.jpg",
                            currency: "EUR",
                            note:"Some very short note"
                        }
                    ]
            });
        });
    }

    render() {
        var items = this.state.items.map((item, index) => <Item key={index} onItemRemove={this.onItemRemove} item={item} /> );
        return (
            <div>
                <CreateDialog attributes={this.state.attributes} purpose={"item"} onItemCreate={this.onItemCreate}/>
                {items.length === 0 ? "No items in this wishlist" : items}
            </div>
        )
    }
}