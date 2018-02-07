import React from "react";

export class WishlistDetails extends React.Component{


    render() {
        console.log(this.props);
        console.log(location.pathname.split("/").pop());
        return (
            <div>
                <h1>Wishlist details page for wishlist with specific id!!!</h1>
                <h3>Hellow this id is: # {this.props.match.params.id == undefined ? "From url"+location.pathname.split("/").pop():"From match: "+this.props.match.params.id}</h3>
            </div>
        )
    }
}