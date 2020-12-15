import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';


class Comment extends Component {

    render () {

        let {item, match: {url}} = this.props

        return (

            <div>

                    Comment: {item.id} - {item.name} - <Link to ={`${url}/${item.id}`} >details</Link>

            </div>


        )

    }

}


export default withRouter(Comment);

