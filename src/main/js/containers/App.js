const React = require('react');
const client = require('../client');
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {browserHistory} from 'react-router';


import {UsersList} from "../components/UserList";
import Wishlists from "../components/Wishlists";
import Wishlist from "../components/Wishlist";


import {Home} from "../components/Home";
import {Header} from "../components/Header";
import {NotFound} from "../components/NotFound";
import {Menu} from "../components/Menu";

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
                        <Menu />
                        <Switch>
                            <PropsRoute exact path="/" component={Home}/>
                            <PropsRoute path="/wishlists/:id" component={Wishlist}/>
                            <PropsRoute path="/wishlists"  component={Wishlists}/>
                            <PropsRoute component={NotFound} />
                        </Switch>
                    </div>
                </Router>
        )
    }

}