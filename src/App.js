import React, {Component} from 'react';
import AllUsers from './components/users/AllUsers'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';



class App extends Component {

    render() {

        return(
            <div>
                <Router>


                <AllUsers/>

                </Router>

            </div>

        )

    }




}
export default App;
