import React, {Component} from 'react';
import UserComponent from '../user/UserComponent.js'
import {UserServices} from "../../services/UserServices";

class AllUsers extends Component {

    userService = new UserServices()

    state = {users: [], chosen: null}

    onSelect = (id) => {
       this.userService.getUserById(id).then(value => this.setState({chosen: value}))
    }

    render() {

        let {users, chosen} = this.state

        return (
            <div>

                {
                    chosen && <h2> {chosen.id} - {chosen.name} </h2>
                }

                {
                    users.map(user => {
                    return (<UserComponent item = {user} func = {this.onSelect} key = {user.id}  />)
                    })
                }

             </div>
        )
    }

    componentDidMount() {
         this.userService.getAllUsers().then(value => this.setState({users: value}))

    }
}

export default AllUsers;

