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


    mainInput = React.createRef()

    userService = new UserServices()

    state = {user: null}


    componentDidMount() {
        let {userID} = this.props

        this.userService.getUserById(userID).then(value => this.setState({user:value}))
    }

    onMesSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.mainInput.value)
    }



    render() {

        let {user} = this.state
        /*if (user) {
        localStorage.setItem(`${user.id}`, `Hi, this is user ${user.id}.`);
        }*/



        return(
            <div>



                <hr/>
                  {
                    user && <div> {user.id} - {user.name} - {user.username} - {user.email} </div>
                  }

                  <div>

                      <div className = 'chatbox' >

                       {user && <ChatWindow value = {localStorage.getItem(`${user.id}`)} /> }

                      </div>

                    <form>

                      <input ref = {(c) => this.mainInput = c} type = 'input' className = 'input' />


                      <button type = 'submit' onClick = {this.onMesSubmit} > send </button>


                    </form>

                  </div>

            </div>

        )

    }




}
export default FullUser;
