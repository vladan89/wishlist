const React = require('react');
const client = require('../client');
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {browserHistory} from 'react-router';


import {UsersList} from "../components/UserList";
import {WishlistDetails} from "../components/WishlistDetails";
import Wishlists from "../components/Wishlists";


import Home from "../components/Home";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Menu from "../components/Menu";

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
        this.state = {users: [], wishlists:[]};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/users'}).done(response => {
            this.setState({users: response.entity._embedded.users});
        });

        client({method: 'GET', path: '/api/wishlists'}).done(response => {
            this.setState({wishlists: response.entity._embedded.wishlists});
        });
    }

    render() {
        return (
                <Router history = {browserHistory}>
                    <div>
                        <Header />
                        <Menu />
                        <Switch>
                            <PropsRoute exact path="/" component={Home}/>
                            <PropsRoute path="/wishlists/:id" component={WishlistDetails}/>
                            <PropsRoute path="/wishlists"  wishlists={this.state.wishlists} component={Wishlists}/>
                            <PropsRoute component={NotFound} />
                        </Switch>
                    </div>
                </Router>
        )
    }

}