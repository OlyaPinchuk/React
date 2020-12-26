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

    state = {user: null, reply: null}


    componentDidMount() {
        let {userID} = this.props
        this.userService.getUserById(userID).then(value => this.setState({user:value}))
        this.userService.getReply().then(value => this.setState({reply: value.value}))

    }


    timer = setTimeout(() => console.log('Hello, World!'), 3000)

    onMesSubmit = (ev) => {
//        ev.preventDefault()

        let {user} = this.state
        let {reply} = this.state
        let messagesArr = []


        if(localStorage.hasOwnProperty(`messagesArr of ${user.id}`)) {

            let currentArr = localStorage.getItem(`messagesArr of ${user.id}`)
            let currentArr1 = JSON.parse(currentArr)
            let currentdate = new Date()
            let day = currentdate.getDate() + '/' + (currentdate.getMonth()+1) + '/' + currentdate.getFullYear()
            let timeNow = currentdate.getHours() +':'+ currentdate.getMinutes() +':'+ currentdate.getSeconds()

            let message = {
            fromUser: 0,
            toUser: user.id,
            date: day,
            time: timeNow,
            text: this.mainInput.value
            }

            currentArr1.push(message)
            let currentArr2 = JSON.stringify(currentArr1)
            localStorage.setItem(`messagesArr of ${user.id}`, `${currentArr2} `)


            let currentReply = localStorage.getItem(`messagesArr of ${user.id}`)
            let currentReply1 = JSON.parse(currentReply)
            let day1 = currentdate.getDate() + '/' + (currentdate.getMonth()+1) + '/' + currentdate.getFullYear()
            let timeNow1 = currentdate.getHours() +':'+ currentdate.getMinutes() +':'+ currentdate.getSeconds()

            let reply1 = {
                fromUser: user.id,
                toUser: 0,
                date: day1,
                time: timeNow1,
                text: reply
            }

            currentReply1.push(reply1)
            let currentReply2 = JSON.stringify(currentReply1)
            localStorage.setItem(`messagesArr of ${user.id}`, `${currentReply2} `)


        } else {
            let messagesArr = []

            let currentdate = new Date()
            let day = currentdate.getDate() + '/' + (currentdate.getMonth()+1) + '/' + currentdate.getFullYear()
            let timeNow = currentdate.getHours() +':'+ currentdate.getMinutes() +':'+ currentdate.getSeconds()

            let message = {
            fromUser: 0,
            toUser: user.id,
            date: day,
            time: timeNow,
            text: this.mainInput.value
            }

            messagesArr.push(message)
            let messagesArr1 = JSON.stringify(messagesArr)
            localStorage.setItem(`messagesArr of ${user.id}`, `${messagesArr1}`)





            let reply1 = {
                fromUser: user.id,
                toUser: 0,
                date: day,
                time: timeNow,
                text: reply
            }

            messagesArr.push(reply1)
            let messagesArr2 = JSON.stringify(messagesArr)
            localStorage.setItem(`messagesArr of ${user.id}`, `${messagesArr2}`)


        }

    }




    render() {

        let {user} = this.state
        console.log(this.state.reply)

        /*let test = [{a:1, b:4}, {c:8}]
        let test1 = JSON.stringify(test)
        localStorage.setItem(`test`, `${test1} `)
        let taken = localStorage.getItem('test')
        let taken1 = JSON.parse(taken)
        console.log(typeof taken1)*/

        /*let currentdate = new Date()
        console.log(currentdate.getDate(), currentdate.getMonth()+1, currentdate.getFullYear(), currentdate.getHours(), currentdate.getMinutes(), currentdate.getSeconds())
        console.log(currentdate.getDate())
        console.log(currentdate.getFullYear())
        console.log(currentdate.getHours())
        console.log(currentdate.getMinutes())
        console.log(currentdate.getSeconds())*/






        return(
            <div>



                <hr/>
                  {
                    user && <div> {user.id} - {user.name} - {user.username} - {user.email} </div>
                  }

                  <div>

                      <div className = 'chatbox' >

                       {user && <ChatWindow value = {JSON.parse(localStorage.getItem(`messagesArr of ${user.id}`))} /> }

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
