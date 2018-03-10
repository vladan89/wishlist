import React from "react";
import {NavLink} from "react-router-dom";

export class ManageWishlistContent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getWishlistById(this.props.id);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.id!==nextProps.id){
            this.props.getWishlistById(nextProps.id);
        }
    }

    onWishlistRemove(id){
        this.props.removeWishlist(id);
    }

    render(){
        return(
            <div>
                <p className="pageSubtitle">Showing details for</p>
                <p className={"pageTitle"}> {this.props.wishlist.wishlist.name} </p>
                <NavLink className={"actionLink"} to={"/"} onClick={(id)=>this.onWishlistRemove(this.props.id)}>Remove</NavLink>
            </div>
        );
    }
}