import React, {Component} from 'react';
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
        console.log(this.props)

        return (
            <div>

                User: {item.id} - {item.name} - <Link to = {`${url}/${item.id}`} > details </Link>

            </div>
        );
    }
}

export default withRouter(UserComponent);
