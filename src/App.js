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

                <AllUsers/>
                <hr/>
                {/*<AllPosts/>*/}

            </div>
        );
    }
}

export default App;
