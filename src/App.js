import React, {Component} from 'react';
import {users} from './database/userDB.js';
import UserComponent from './components/user/UserComponent';
import AllUsers from './components/allUsers/AllUsers';
import AllPosts from "./components/posts/AllPosts";
import AllComments from './components/comments/AllComments';
import  './components/allUsers/AllUsersDesign.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';


class App extends Component {

    render () {

        return (
            <div>

                <Router>
                    <div class = 'whole-header'>
                        <div class = 'header' >
                            <Link class = 'b' to = {'/users'}> users </Link>
                        </div>

                        <div class = 'header'>
                            <Link to = {'/posts'}> posts </Link>
                        </div>

                        <div class = 'header'>
                            <Link to = {'/comments'}> comments </Link>
                        </div>
                    </div>


                    <hr/>

                    <div class = 'main-div' >
                        <Switch>
                            <Route path = {'/users'}>
                                <AllUsers/>
                            </Route>

                            <Route path = {'/posts'} component = {AllPosts} />

                            <Route path = {'/comments'} render = {() => {
                                return <AllComments/>
                                }} />
                            }

                        </Switch>
                    </div>

                </Router>


            </div>
        );
    }
}

export default App;
