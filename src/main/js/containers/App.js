const React = require('react');
const client = require('../client');
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {browserHistory} from 'react-router';


import {UsersList} from "../components/UserList";
import WishlistList from "../components/WishlistList";
import WishlistDetails from "../components/WishlistDetails";


import {Home} from "../components/Home";
import {Header} from "../components/Header";
import {NotFound} from "../components/NotFound";
import {Login} from "../components/Login";
import {Footer} from "../components/Footer";

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

export class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router history = {browserHistory}>
                    <div>
                        <Header />
                        <div className="min100vh">
                            <Switch>
                                <PropsRoute exact path="/" component={WishlistList}/>
                                <PropsRoute path="/wishlists/:id" component={WishlistDetails}/>
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