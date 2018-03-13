import React from "react";
import {NavLink} from "react-router-dom";
import MDEdit from "react-icons/lib/md/settings";
import MDRemove from "react-icons/lib/md/delete";

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
                <p className={"pageTitle"}> {this.props.wishlist.wishlist.name} </p>

                <div className="actions">
                    <a href={"#"} className={"linkWithIcon"}><MDEdit fill={"#808082"} size={20} className={"icon"}/> Edit wishlist </a>
                    <NavLink className={"linkWithIcon"} to={"/"} onClick={(id)=>this.onWishlistRemove(this.props.id)}><MDRemove fill={"#808082"} size={20} className={"icon"}/> Remove wishlist</NavLink>
                </div>
            </div>
        );
    }
}