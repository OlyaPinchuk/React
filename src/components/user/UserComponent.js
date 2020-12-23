import React, {Component} from 'react';
import '../allUsers/AllUsersDesign.css'
//import './User.css'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';



class UserComponent extends Component {

    render () {

        let {item, match: {url}} = this.props


        return (
            <div className = 'user-div' >

                User: {item.id} - {item.name} - <Link to = {`${url}/${item.id}`} > details </Link> - <Link to = {`${url}/${item.id}/posts`} > posts </Link>

            </div>
        );
    }
}

export default withRouter(UserComponent);
