import React, {useEffect, useState} from 'react';
import {FilmList} from '../components'
import {movieService} from "../services";
import styles from './Home.module.css'

export const Home = () => {

    const [moviesList, setMoviesList] = useState([])
    const [loading, setLoading] = useState(null)


    const fetchMovies = async() => {
        try {
            setLoading(true)
            const {page, results, total_pages, total_results} = await movieService.getMovies()
            setMoviesList(results)
        } catch(e) {
            console.log(e)
        } finally {
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const loadingIndicator = () => {
        <div className={styles.loading}>Loading...
        </div>
    }

    return(
        <div>
            {loading || loading === null ? loadingIndicator() : <FilmList items={moviesList}/>}
        </div>
    )

}
