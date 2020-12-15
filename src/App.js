import React, {Component} from 'react';
import {users} from './database/userDB.js'
import UserComponent from './components/user/UserComponent'
import AllUsers from './components/allUsers/AllUsers'
import AllPosts from "./components/allPosts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'



class App extends Component {

    render () {

        /*console.log(Math.floor(Math.random() * 10))*/

        return (
            <div>

                <Router>

                    <div>
                        <Link to = {'/users'}> users </Link>
                    </div>

                    <div>
                        <Link to = {'/posts'}> posts </Link>
                    </div>

                    <div>
                        <Link to = {'/comments'}> comments </Link>
                    </div>


                    <hr/>

                    <Switch>
                        <Route path = {'/users'}>
                            <AllUsers/>
                        </Route>

                        <Route path = {'/posts'} component = {AllPosts} />

                        <Route path = {'/comments'} render = {() => {
                            return 'comments will be here'
                            }} />
                        }

                    </Switch>

                </Router>


            </div>
        );
    }
}

export default App;
