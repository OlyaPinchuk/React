import React, {Component} from 'react';
import './App.css'
import {BaseLayout} from "./layouts";
import {Home} from './pages/home'
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import {MovieDetails} from "./pages";


function App() {

    const history = useHistory()


        return(
            <BaseLayout>
                <Switch>
                    <Route path = '/' exact>
                        <Home/>
                    </Route>

                    <Route path = '/movie/:id'>
                        <MovieDetails/>
                    </Route>


                    <Route>
                        <h4>Page not found
                            <button onClick = {() => {
                                history.push('/')
                                }} >
                                go home
                            </button>
                        </h4>
                    </Route>

                </Switch>
            </BaseLayout>
        )

}
export default App;
