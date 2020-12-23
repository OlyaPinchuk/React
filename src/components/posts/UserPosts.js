import React, {Component} from 'react';
import UserComponent from '../user/UserComponent';
import PostComponent from './PostComponent';
import {UserServices} from "../../services/UserServices";

import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';



class UserPosts extends Component {

    state = {posts: []}

    userService = new UserServices()

    componentDidMount () {
        const {ID} = this.props
        this.userService.getChosenUserPosts(ID).then(posts => this.setState({posts}))

    }

    render() {

        let {ID} = this.props

        let {posts} = this.state

        return (

            <div className = 'posts-div' >


                <h3> These are user`s posts: </h3>
                {
                    posts.map(value =>{
                        return(<PostComponent item = {value} key = {value.id} />)

                    })
                }

            </div>
        )
    }

}

export default UserPosts;





