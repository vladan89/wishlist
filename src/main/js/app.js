'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

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
            <UsersList users={this.state.users}/>
    )
    }
}

class UsersList extends React.Component{
    render() {
        var users = this.props.users.map(user =>
            <User key={user._links.self.href} user={user}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Username</th>
                    <th>Pass</th>
                    <th>Created</th>
                </tr>
                {users}
                </tbody>
            </table>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.password}</td>
                <td>{this.props.user.created.year}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)