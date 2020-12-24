import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'


class UserComponent extends Component {

    render() {

        let {value} = this.props
        console.log(value)

        return(
            <div>

                Messages here.

                {value && <div> {value} </div>}



            </div>

        )

    }




}
export default UserComponent;
