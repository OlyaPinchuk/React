/*SWAPI.DEV*/
import React, {Component} from 'react';
import People from './components/people/People'
import Planets from './components/planets/Planets'
import AllStarships from './components/starships/AllStarships'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'


class App extends Component {

    render () {

        return (
            <div>

                <hr/>
                People
                <hr/>

                <People/>
                <hr/>

                <hr/>
                Planets
                <hr/>
                <Planets/>
                <hr/>


                <hr/>
                Starships
                <hr/>
                <AllStarships/>

            </div>
        );
    }
}

export default App;
