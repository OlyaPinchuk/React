import React, {Component} from 'react';
import {users} from './database/userDB.js';
import UserComponent from './components/user/UserComponent';
import AllUsers from './components/allUsers/AllUsers';
import AllPosts from "./components/posts/AllPosts";
import AllComments from './components/comments/AllComments';
import FullUser from './components/user/FullUser'
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
                    <div className = 'whole-header'>

                        <div class = 'header-el' >
                               <Link to = {''}> Home </Link>
                        </div>

                        <div class = 'header-el' >
                            <Link to = {'/users'}> users </Link>
                        </div>

                        {/*<div className = 'header'>
                            <Link to = {'/posts'}> posts </Link>
                        </div>

                        <div className = 'header'>
                            <Link to = {'/comments'}> comments </Link>
                        </div>*/}
                    </div>


                        <Switch>

                                <Route path = {'/users'}>
                                    <AllUsers/>
                                </Route>

                                 <Route path = {''}>
                                 </Route>

                                {/*<Route path = {'/posts'} component = {AllPosts} />

                                <Route path = {'/comments'} render = {() => {
                                    return <AllComments/>
                                    }} />
                                }*/}

                        </Switch>



                </Router>

            </div>
        );
    }
}

export default App;
