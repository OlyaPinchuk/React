import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';

class PostComponent extends Component {


    render() {

        let {item, match: {url}} = this.props

        return (
            <div>

                    Post: {item.id} - {item.title} - <Link to = {`${url}/${item.id} `} >details</Link>

            </div>
        );
    }
}

export default withRouter(PostComponent);