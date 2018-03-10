const React = require('react');
const client = require('../client');
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {browserHistory} from 'react-router';
import {connect} from "react-redux";

import {UsersList} from "../components/UserList";
import WishlistList from "../components/WishlistList";
import WishlistDetails from "../components/WishlistDetails";

import {Home} from "../components/Home";
import {Header} from "../components/Header";
import {NotFound} from "../components/NotFound";
import {Login} from "../components/Login";
import {Footer} from "../components/Footer";

import {getLoggedUserId} from "../actions/securityActions";
import {createWishlist, getWishlistById, getWishlistsByUserId, removeWishlist} from "../actions/wishlistActions";
import {createItem, getItemsByWishlistId, removeItem} from "../actions/itemActions";

import {PropsRoute} from "../components/PropsRoute";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router history = {browserHistory}>
                    <div>
                        <Header loggedIn={this.props.security.id}/>
                        <div className={location.pathname.substring(0,6) === "/login" ? "content horizontalyCentered": "content"}>
                            <Switch>

                                <PropsRoute exact path="/" component={Home}
                                    wishlist = {this.props.wishlist}
                                    getLoggedUserId = {this.props.getLoggedUserId}
                                    createWishlist = {this.props.createWishlist}
                                    removeWishlist = {this.props.removeWishlist} />

                                <PropsRoute path="/wishlists/:id" component={WishlistDetails}
                                    wishlist = {this.props.wishlist}
                                    getLoggedUserId = {this.props.getLoggedUserId}
                                    createWishlist = {this.props.createWishlist}
                                    removeWishlist = {this.props.removeWishlist}
                                    item = {this.props.item}
                                    getItemsByWishlistId = {this.props.getItemsByWishlistId}
                                    createItem = {this.props.createItem}
                                    removeItem = {this.props.removeItem}
                                    getWishlistById = {this.props.getWishlistById} />

                                <PropsRoute path="/login"  component={Login}/>

                                <PropsRoute path="/wishlists"  component={Home}/>
                                <PropsRoute component={NotFound} />
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </Router>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        security: state.securityReducer,
        wishlist: state.wishlistReducer,
        item: state.itemReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLoggedUserId:()=>{
            dispatch(getLoggedUserId())
                .then((response) => dispatch(getWishlistsByUserId(response.action.payload.data)))
        },
        createWishlist:(data)=>{
            dispatch(createWishlist(data));
        },
        removeWishlist:(id)=>{
            dispatch(removeWishlist(id));
        },
        getItemsByWishlistId:(id)=>{
            dispatch(getItemsByWishlistId(id));
        },
        createItem:(data)=>{
            dispatch(createItem(data));
        },
        removeItem:(id)=>{
            dispatch(removeItem(id));
        },
        getWishlistById:(id)=>{
            dispatch(getWishlistById(id))
        },
        getWishlistsByUserId:(id)=>{
            dispatch(getWishlistsByUserId(id));
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
