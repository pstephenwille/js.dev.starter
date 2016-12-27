import React from 'react'
import {connect} from 'react-redux';
import UserTableView from './components/user.table.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>woot</h1>
                <UserTableView />
            </div>
        );
    }
}


export default connect()(App);
