import React from "react";

export class User extends React.Component {
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