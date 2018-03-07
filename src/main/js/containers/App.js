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
import {createWishlist, getWishlistsByUserId, removeWishlist} from "../actions/wishlistActions";
import {createItem, getItemsByWishlistId, removeItem} from "../actions/itemActions";


const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return React.createElement(component, finalProps);
}

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router history = {browserHistory}>
                    <div>
                        <Header />
                        <div className={location.pathname.substring(0,6) === "/login" ? "content horizontalyCentered": "content"}>
                            <Switch>

                                <PropsRoute exact path="/" component={WishlistList}
                                    wishlist = {this.props.wishlist}
                                    getLoggedUserId = {this.props.getLoggedUserId}
                                    getWishlistsByUserId = {this.props.getWishlistsByUserId}
                                    createWishlist = {this.props.createWishlist}
                                    removeWishlist = {this.props.removeWishlist}/>

                                <PropsRoute path="/wishlists/:id" component={WishlistDetails}
                                    item = {this.props.item}
                                    getItemsByWishlistId = {this.props.getItemsByWishlistId}
                                    createItem = {this.props.createItem}
                                    removeItem = {this.props.removeItem}
                                />
                                <PropsRoute path="/wishlists"  component={WishlistList}/>
                                <PropsRoute path="/login"  component={Login}/>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
