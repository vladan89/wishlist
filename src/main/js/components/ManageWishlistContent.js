import React from "react";
import {NavLink} from "react-router-dom";
import MDRemove from "react-icons/lib/md/delete";
import {EditWishlistDialog} from "./EditWishlistDialog";

export class ManageWishlistContent extends React.Component{
    constructor(props){
        super(props);
        this.confirmWishlistDeletion = this.confirmWishlistDeletion.bind(this);
    }

    confirmWishlistDeletion(e){
        return confirm("Are you sure you want to remove this wishlist?") ? this.onWishlistRemove(this.props.id) : e.preventDefault();
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
                    <EditWishlistDialog  attributes={["name"]} id={this.props.id}
                                         editWishlist = {this.props.editWishlist}
                                         currentWishlistName={this.props.wishlist.wishlist.name}/>
                    <NavLink className={"linkWithIcon"} to={"/"} onClick={this.confirmWishlistDeletion}><MDRemove fill={"#808082"} size={20} className={"icon"}/> Remove wishlist</NavLink>
                </div>
            </div>
        );
    }
}