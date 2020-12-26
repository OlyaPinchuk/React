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
        let getClassName = el => el.fromUser == '0' ? 'my-message' : 'answer';

        return(
            <div>

                 <div className = 'heading'>Chat</div>
                 <div className = 'messages'>

                    {
                        value && value.map((el, i) => {

                            return (
                                <div className = {getClassName(el)} key={`${i}`}>
                                    <div className = 'info' > <span> user id: {el.fromUser} - {el.date} - {el.time} </span> </div>
                                    <div> {el.text} </div>
                                </div>
                            )

                        })
                    }
                </div>

            </div>

        )

    }




}
export default UserComponent;
