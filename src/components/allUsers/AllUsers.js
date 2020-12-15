import React, {Component} from 'react';
import UserComponent from '../user/UserComponent.js'
import {UserServices} from "../../services/UserServices";
import AllPosts from '../posts/AllPosts'
import PostComponent from '../posts/PostComponent'
import UserPosts from '../posts/UserPosts'

class AllUsers extends Component {

    userService = new UserServices()

    state = {users: []}

    componentDidMount () {
        this.userService.getAllUsers().then(value => this.setState({users: value}))

    }

    render() {

        let {users} = this.state


        return (
            <div>

                {
                    users.map(user => <UserComponent item = {user} key = {user.id}/>)
                }

             </div>
        )
    }
}

export default AllUsers;

