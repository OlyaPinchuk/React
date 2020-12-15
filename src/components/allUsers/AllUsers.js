import React, {Component} from 'react';
import UserComponent from '../user/UserComponent.js'
import {UserServices} from "../../services/UserServices";
import AllPosts from '../allPosts/AllPosts'
import PostComponent from '../post/PostComponent'
import UserPosts from '../UserPosts'

class AllUsers extends Component {

    userService = new UserServices()

    state = {users: [], chosen: null, postsOfChosenUser: [], posts: [],}

    componentDidMount() {
         this.userService.getAllUsers().then(value => this.setState({users: value}))

    }

    onSelect = (id) => {

        this.userService.getUserById(id).then(value => this.setState({chosen: value}))
        this.userService.getChosenUserPosts(id).then(value => this.setState({postsOfChosenUser: value}))
    }

    render() {

        let {users, chosen, postsOfChosenUser, idOfChosenUser} = this.state

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

                <hr/>

                {
                    postsOfChosenUser.length > 0 && <UserPosts posts = {postsOfChosenUser} user = {chosen} />
                }

             </div>
        )
    }
}

export default AllUsers;

