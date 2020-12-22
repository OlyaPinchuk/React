import React, {Component} from 'react';
import UserComponent from '../user/UserComponent.js'
import {UserServices} from "../../services/UserServices";
import AllPosts from '../posts/AllPosts'
import PostComponent from '../posts/PostComponent'
import UserPosts from '../posts/UserPosts'
import FullUser from '../user/FullUser'
import  './AllUsersDesign.css'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class AllUsers extends Component {

    userService = new UserServices()

    state = {users: []}

    componentDidMount () {
        this.userService.getAllUsers().then(value => this.setState({users: value}))

    }

    render() {

        let {users} = this.state
        let {match: {url}} = this.props


        return (
            <div>

                {
                    users.map(user => <UserComponent item = {user} key = {user.id}/>)
                }

                <hr/>

                    <Switch>

                        <Route path = {`${url}/:id/:posts`} render = {(props) => {
                            console.log(props)
                            let {match: {params: {id}}} = props
                            return <UserPosts ID = {id} key = {id} />
                        }} />

                        <Route path = {`${url}/:id`} exact = {true} render = {(props) => {
                            console.log(props)
                            let {match: {params: {id}}} = props
                            return <FullUser userID = {id} key = {id} />
                        }} />




                    </Switch>

                <hr/>


             </div>
        )
    }
}

export default withRouter (AllUsers);

