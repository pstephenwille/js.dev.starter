import React, {PropTypes} from 'react';

const User = ({user}) => {
    return (
        <tr>
            <td><a href="#">Delete</a></td>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.woot}</td>
        </tr>
    )
};

// User.propTypes = {
//     user: PropTypes.object.isRequired
// };

export default User;
