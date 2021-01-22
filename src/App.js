import React, {Component} from 'react';
import {movieService} from "./services";
import './App.css'
import {BaseLayout} from "./layouts";
import {Home} from './pages'




function App() {

    React.useEffect(() => {

        movieService.getMovies().then(console.log)

    }, [])

        return(
            <BaseLayout>
                <Home/>
            </BaseLayout>
        )

}
export default App;
