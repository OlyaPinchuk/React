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
/*
HOMETASK 2
    state = {flag: false}

    test = () => {
        this.setState({flag: !this.state.flag})
        console.log('test', this.state.flag.toString())
    }
   ===============================================================================================
*/
    render () {

        console.log(Math.floor(Math.random() * 10))

        return (
            <div>

                <AllUsers/>
                <hr/>
                <AllPosts/>


{/*===============================================================================================================================
                <Router>

                    <div>
                        <Link to = {'/users'}> users </Link>
                    </div>

                    <Switch>
                        <Route path = {'/users'}>
                            <AllUsers/>
                        </Route>
                    </Switch>

                </Router>*/}

 {/*====================================================================================================================
 HOMETASK 1
                {
                    users.map((user, index) => {
                        return (<UserComponent item = {user} key = {index} />)
                    })

                }*/}

  {/*HOMETASK 2

                <button onClick = {this.test}> click me </button>
 ====================================================================================================================*/}

            </div>
        );
    }
}

export default App;
