import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import { deleteUser } from '../actions/user.actions';

const UserRowHtml = ({user, dispatch}) => {
    return (
        <tr>
            <td>
                <a onClick={e => {
                    e.preventDefault();
                    dispatch(deleteUser(user.id))}}>Delete</a>
            </td>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.woot}</td>
        </tr>
    )
};

// UserRowHtml.propTypes = {
//     user: PropTypes.object.isRequired
// };

export default connect()(UserRowHtml);
