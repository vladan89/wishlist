import React from "react";

export const User = (props) => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.password}</td>
        <td>{props.user.created.year}</td>
    </tr>
);