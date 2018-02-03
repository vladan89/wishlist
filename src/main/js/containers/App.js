//'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('../client');

import {UsersList} from "../components/UserList";

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
            <div>
                <h1>Wishlist website</h1>
                {/*<UsersList users={this.state.users}/>*/}
            </div>
        )
    }
}