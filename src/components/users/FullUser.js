import React, {Component} from 'react';
import {UserServices} from '../../services/UserServices'
import './FullUserDesign.css'
import ChatWindow from '../chat/ChatWindow'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'


class FullUser extends Component {


    mainInput = React.createRef();

    userService = new UserServices();

    state = {user: null, messages: null, reply: null};


    componentDidMount() {
        let {userID} = this.props;

        this.userService.getUserById(userID).then(value => this.setState({user:value}));

        let array = JSON.parse(localStorage.getItem(`messagesArr of ${userID}`));
        this.setState({messages: array});
    }

    createMessageObject(fromUser, toUser, text) {

        let currentDate = new Date();
        let day = currentDate.getDate() + '/' + (currentDate.getMonth()+1) + '/' + currentDate.getFullYear();
        let timeNow = currentDate.getHours() +':'+ currentDate.getMinutes() +':'+ currentDate.getSeconds();

        let message = {
            fromUser,
            toUser,
            date: day,
            time: timeNow,
            text,
        };

        return message;
    }

    createReplyObject(messagesArr) {

        let {user} = this.state;
        this.userService.getReply().then(value => {

            let reply = this.createMessageObject(user.id, 0, value);

            messagesArr.push(reply);
            this.setState({messages: messagesArr});
            let messagesArr2 = JSON.stringify(messagesArr);
            localStorage.setItem(`messagesArr of ${user.id}`, `${messagesArr2} `);

        } );

    }

    addMessage(messagesArr) {
        let {user} = this.state;
        let message = this.createMessageObject(0, user.id, this.mainInput.value);

        messagesArr.push(message);
        this.setState({messages: messagesArr});
        let messagesArr1 = JSON.stringify(messagesArr);
        localStorage.setItem(`messagesArr of ${user.id}`, `${messagesArr1} `);
        this.mainInput.value = null;

        setTimeout(() => this.createReplyObject(messagesArr), 2000);
    }

    onMesSubmit = (ev) => {
        let {user, messages} = this.state;

        if(localStorage.hasOwnProperty(`messagesArr of ${user.id}`)) {
            this.addMessage(JSON.parse(JSON.stringify(messages)))
        } else {
            this.addMessage([])
        }
    };


    render() {

        let {user} = this.state
        let {messages} =this.state


        return(
            <div>





                <hr/>
                  {
                    user && <div> {user.id} - {user.name} - {user.username} - {user.email} </div>
                  }

                  <div>

                      <div className = 'chatbox' >


                       {<ChatWindow value = {messages} /> }

                      </div>

                    <div>

                      <input ref = {(c) => this.mainInput = c} type = 'input' className = 'input' />


                      <button onClick = {this.onMesSubmit} > send </button>


                    </div>

                  </div>

            </div>

        )

    }




}
export default FullUser;
