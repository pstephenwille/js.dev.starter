import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserRowHtml from './user.row.html';
import {loadUsers} from '../actions/user.actions';

/* view component */
const UserTableHtml = ({users}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Woot</th>
            </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <UserRowHtml
                        key={user.id}
                        user={user} />)}
            </tbody>
        </table>
    );
};

// UserTableHtml.propTypes = {
//     users: PropTypes.array.isRequired
// };

export default UserTableHtml;

