import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'


class UserComponent extends Component {

    render() {

        let {user} = this.props

        return(
            <div>


                {user.id} - {user.name} - <button> <Link to = {'/users/' + user.id} > chat </Link> </button>



            </div>

        )

    }




}
export default UserComponent;
