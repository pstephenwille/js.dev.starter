import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import User from './user.row.html';
import {loadUsers} from '../actions/user.actions';
import UserTableHtml from './user.table.html';

/* view component */
class UserTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.deleteUser = this.deleteUser.bind(this);
    };
/*
    deleteUser(e, id){
        // e.preventDefault();
        /!*dispatch delete action *!/
        console.log('...deleteuser ', id);
    };*/

    render() {
        const {users} = this.props;
        return (
            <UserTableHtml users={users} />
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

