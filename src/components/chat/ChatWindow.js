import React, {Component} from 'react';
import '../users/FullUserDesign.css'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'


class UserComponent extends Component {



    render() {

        let {value} = this.props


        return(
            <div>

                 <div className = 'heading'>Chat</div>

                {
                    value && value.map(el => el.fromUser == '0' ? <div className = 'my-message' > {el.text} </div> : <div> {el.text} </div>)


                }



            </div>

        )

    }




}
export default UserComponent;
