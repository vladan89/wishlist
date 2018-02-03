import React from "react";
import {User} from "./User";

export class UsersList extends React.Component{
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