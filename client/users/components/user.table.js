import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import User from './user.row.html';
import {loadUsers} from '../actions/user.action.load.users';
import UserTableHtml from './user.table.html';

/* view component */
class UserTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    };

    render() {
        const {users, loading} = this.props;

        return (
            <div>
                {loading && <h1>Loading</h1>}
                <UserTableHtml users={users}/>
            </div>
         )
    };
}


UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) /* components own props */ {
    return {
        loading: state.requestsInProgress > 0,
        users: state.users/* name of reducer */
    };
};

// function mapDispatchToProps(dispatch) {
//     /* 'actions' available to component; connect() injects 'dispatch' */
//     actions: bindActionCreators(loadUsers, dispatch)
// };

export default connect(mapStateToProps)(UserTable);

