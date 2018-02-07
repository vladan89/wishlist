import React from "react";
const client = require('../client');

export class WishlistDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : []
        }
    }

    componentDidMount(){
        //var id = location.pathname.split("/").pop();
        var id = this.props.match.params.id;
        client({method: 'GET', path: '/api/wishlists/'+id+'/items'}).done(response => {
            this.setState({items: response.entity._embedded.items});
        });
    }

    render() {
        var items = this.state.items.map(item => (<tr className="wishlistItem" key={item._links.self.href}>
                <td className="wishlistItemPhoto">
                    <img src="https://static.tehnomanija.rs/UserFiles/protected_products/77559.jpg" alt="Item photo"/>
                </td>
                <td className="wishlistItemName">{item.name}</td>
                <td className="wishlistItemPrice">{item.price} {item.currency.toUpperCase()}</td>
                <td className="wishlistItemNote">{item.note}</td>
            </tr>)
        );
        return (
            <div>
                <table className="wishlistItemsTable">
                    <thead>
                        <tr className="wishlistItemsHeader">
                            <th>Thumbnail</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>{items.length === 0 ? "No items in this wishlist" : items}</tbody>
                </table>
            </div>
        )
    }
}