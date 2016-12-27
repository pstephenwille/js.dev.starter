import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import User from './user.row';
import {loadUsers} from '../actions/user.actions';

/* view component */
class UserTable extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    // };

    render() {
        const {users} = this.props;
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
                    {users.map(user => <User key={user.id} user={user}/> )}
                </tbody>
            </table>
        )
    };
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) /* components own props */ {
    return {
        users: state.users/* name of reducer */
    };
};

// function mapDispatchToProps(dispatch) {
//     /* 'actions' available to component; connect() injects 'dispatch' */
//     actions: bindActionCreators(loadUsers, dispatch)
// };

export default connect(mapStateToProps)(UserTable);

