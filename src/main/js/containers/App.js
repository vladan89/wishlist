const React = require('react');
const client = require('../client');
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {browserHistory, hashHistory} from 'react-router';

import {UsersList} from "../components/UserList";

import Home from "../components/Home";
import Other from "../components/Other";
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
        this.state = {users: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/users'}).done(response => {
            this.setState({users: response.entity._embedded.users});
        });

    }

    render() {
        return (
                <Router history = {hashHistory}>
                    <div>
                        <Menu />
                        <Switch>
                            <PropsRoute exact path="/" component={Home}/>
                            <PropsRoute path="/other" component={Other}/>
                            <PropsRoute component={NotFound} />
                        </Switch>
                    </div>
                </Router>
        )
    }

}