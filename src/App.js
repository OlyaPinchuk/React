import React, {Component} from 'react';
import {movieService} from "./services";
import './App.css'


const PageLayout = ({children}) => {

    return (
        <div className='wrapper'>
            <header>header data</header>

            <main>
                {children}
            </main>

            <footer>footer data</footer>

        </div>
    )
}


function App() {

    React.useEffect(() => {

        movieService.getMovies().then(console.log)

    }, [])

        return(
            <PageLayout>
                <div>helllllo</div>
            </PageLayout>
        )

}
export default App;
